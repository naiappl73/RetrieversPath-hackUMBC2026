import io
import psycopg
import pandas as pd
import numpy as np

# --- Database Connection Config ---
DB_USER = "postgres"
DB_PASS = "DeezNuts2020"  # Replace with your pgAdmin/Postgres password
DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "MAPHACK"                 # Matches your database name from the logs

CONN_STR = f"host={DB_HOST} port={DB_PORT} dbname={DB_NAME} user={DB_USER} password={DB_PASS}"

FILES = [
    ("course_catalog", "course_catalog.csv"),
    ("students_current", "students_current.csv"),
    ("alumni", "alumni.csv"),
    ("student_experience", "student_experience.csv"),
    ("employment_history", "employment_history.csv"),
    ("transcripts", "transcripts.csv"),
]

def seed_database():
    with psycopg.connect(CONN_STR) as conn:
        with conn.cursor() as cur:
            for table_name, file_path in FILES:
                print(f"Loading {file_path} into table '{table_name}'...")
                df = pd.read_csv(file_path)

                # 1. Clean 'Not Applicable' and empty strings to empty blanks for CSV copy
                df = df.replace("Not Applicable", np.nan).replace(r"^\s*$", np.nan, regex=True)

                # 2. Normalize boolean values to PostgreSQL standard 't' / 'f'
                for col in df.columns:
                    non_null = df[col].dropna()
                    if len(non_null) > 0 and set(non_null.unique()).issubset({"TRUE", "FALSE", "True", "False", True, False}):
                        df[col] = df[col].map({"TRUE": "t", "FALSE": "f", "True": "t", "False": "f", True: "t", False: "f"})

                # 3. Truncate table before loading
                cur.execute(f"TRUNCATE TABLE {table_name} CASCADE;")

                # 4. Stream data directly into PostgreSQL using native COPY
                buffer = io.StringIO()
                df.to_csv(buffer, index=False, header=False, na_rep="\\N")
                buffer.seek(0)

                columns = ", ".join(df.columns)
                copy_query = f"COPY {table_name} ({columns}) FROM STDIN WITH (FORMAT CSV, NULL '\\N');"

                with cur.copy(copy_query) as copy:
                    copy.write(buffer.getvalue())

                conn.commit()
                print(f"✓ Finished {table_name}: Inserted {len(df):,} rows.\n")

    print("All tables successfully seeded into PostgreSQL!")

if __name__ == "__main__":
    seed_database()