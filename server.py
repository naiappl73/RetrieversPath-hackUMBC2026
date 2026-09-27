import psycopg
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

DB_USER = "postgres"
DB_PASS = "postgres"
DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "MAPHACK"

CONN_STR = f"host={DB_HOST} port={DB_PORT} dbname={DB_NAME} user={DB_USER} password={DB_PASS}"

app = FastAPI(title="RetrieversPath Backend Engine")

app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",  
        "*"], allow_credentials=True,allow_methods=["*"], allow_headers=["*"],)

class StudentProfileRequest(BaseModel):
    major: str
    track: str
    target_interests:Optional[List[str]] = []


@app.post("/api/recommendations")
def get_reccomendations(profile: StudentProfileRequest):
    query = """
        SELECT 
            first_job_family AS job_family,
            COUNT(*) AS alumni_placed_count,
            ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY first_job_annual_salary_usd)::numeric, 0) AS median_starting_salary,
            ARRAY_AGG(DISTINCT first_job_title) FILTER (WHERE first_job_title IS NOT NULL) AS sample_titles
        FROM alumni
        WHERE major = %s
          AND (track = %s OR %s = 'General')
          AND first_job_family IS NOT NULL
          AND first_job_family != 'Not Applicable'
        GROUP BY first_job_family
        ORDER BY alumni_placed_count DESC;
    """

    with psycopg.connect(CONN_STR) as conn:
        with conn.cursor() as cur:
            cur.execute(query, (profile.major, profile.track, profile.track))
            rows = cur.fetchall()

    if not rows:
        raise HTTPException(status_code=404, detail="No historical records found for this major/track.")

    total_graduates = sum(row[1] for row in rows)
    recommendations = []
    for row in rows:
        job_family, count, median_sal, sample_titles = row
        match_percentage = round((count / total_graduates) * 100, 1)
        recommendations.append({
            "job_family": job_family,
            "match_score": match_percentage,
            "historical_alumni_count": count,
            "median_starting_salary": int(median_sal) if median_sal else 0,
            "entry_roles": (sample_titles or [])[:3]
        })

    return {"recommended_fields": recommendations}

@app.get("/api/careers/insights")
def get_career_insights(job_family: str):
    """
    Query parameter endpoint: /api/careers/insights?job_family=Software Engineering
    """
    with psycopg.connect(CONN_STR) as conn:
        with conn.cursor() as cur:
            # 1. Salary Benchmarks across seniority levels
            cur.execute("""
                SELECT 
                    seniority_level,
                    ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY annual_salary_usd)::numeric, 0) AS median_salary,
                    ROUND(PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY annual_salary_usd)::numeric, 0) AS p75_salary
                FROM employment_history
                WHERE job_family = %s
                GROUP BY seniority_level
                ORDER BY median_salary ASC;
            """, (job_family,))
            salary_data = cur.fetchall()

            # 2. Top Hiring Regions & Employers
            cur.execute("""
                SELECT region, COUNT(*) AS count
                FROM employment_history
                WHERE job_family = %s AND region IS NOT NULL
                GROUP BY region
                ORDER BY count DESC
                LIMIT 4;
            """, (job_family,))
            top_regions = [r[0] for r in cur.fetchall()]

            cur.execute("""
                SELECT employer, COUNT(*) AS count
                FROM employment_history
                WHERE job_family = %s
                GROUP BY employer
                ORDER BY count DESC
                LIMIT 5;
            """, (job_family,))
            top_employers = [e[0] for e in cur.fetchall()]

            # 3. Top Skills from Roles and Matching Catalog Courses
            cur.execute("""
                SELECT UNNEST(STRING_TO_ARRAY(role_skill_tags, '|')) AS skill, COUNT(*) as freq
                FROM employment_history
                WHERE job_family = %s AND role_skill_tags IS NOT NULL
                GROUP BY skill
                ORDER BY freq DESC
                LIMIT 6;
            """, (job_family,))
            top_skills = [s[0] for s in cur.fetchall()]

            cur.execute("""
                SELECT course_id, course_title, skill_tags
                FROM course_catalog
                WHERE skill_tags IS NOT NULL;
            """)
            catalog_rows = cur.fetchall()

            skill_set = set(top_skills)
            mapped_courses = []
            for cid, title, tags in catalog_rows:
                ctags = set(tags.split("|"))
                overlapping = ctags.intersection(skill_set)
                if overlapping:
                    mapped_courses.append({
                        "course_id": cid,
                        "title": title,
                        "teaches_skills": list(overlapping)
                    })

            # 4. Common Pre-Graduation Internships / Research among Alumni
            cur.execute("""
                SELECT se.experience_type, se.experience_name, se.organization, COUNT(*) as freq
                FROM student_experience se
                JOIN alumni a ON se.campus_id = a.campus_id
                WHERE a.first_job_family = %s
                  AND se.experience_type IN ('Internship', 'Undergraduate Research')
                GROUP BY se.experience_type, se.experience_name, se.organization
                ORDER BY freq DESC
                LIMIT 5;
            """, (job_family,))
            historical_experiences = [
                {
                    "type": exp[0],
                    "title": exp[1],
                    "organization": exp[2]
                }
                for exp in cur.fetchall()
            ]

    return {
        "job_family": job_family,
        "salary_benchmarks": [
            {"seniority": s[0], "median": int(s[1]), "75th_percentile": int(s[2])}
            for s in salary_data
        ],
        "top_regions": top_regions,
        "top_employers": top_employers,
        "in_demand_skills": top_skills,
        "relevant_umbc_courses": mapped_courses[:6],
        "historical_experience_pathways": historical_experiences
    }

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "RetrieversPath Backend Engine",
        "docs": "/docs"
    }

class RoadmapRequest(BaseModel):
    campus_id: str
    target_job_family: str

@app.post("/api/roadmap/generate")
def generate_career_roadmap(req: RoadmapRequest):
    with psycopg.connect(CONN_STR) as conn:
        with conn.cursor() as cur:
            # 1. Fetch student's completed courses (excluding F, W, and IP)
            cur.execute("""
                SELECT DISTINCT course_id 
                FROM transcripts 
                WHERE campus_id = %s AND grade NOT IN ('F', 'W', 'IP');
            """, (req.campus_id,))
            completed_courses = {row[0] for row in cur.fetchall()}

            # 2. Extract skills already acquired by student
            cur.execute("""
                SELECT course_id, skill_tags 
                FROM course_catalog 
                WHERE skill_tags IS NOT NULL;
            """)
            catalog_rows = cur.fetchall()

            acquired_skills = set()
            for cid, tags in catalog_rows:
                if cid in completed_courses and tags:
                    acquired_skills.update(tags.split("|"))

            # 3. Extract top skills required for the target role
            cur.execute("""
                SELECT UNNEST(STRING_TO_ARRAY(role_skill_tags, '|')) AS skill, COUNT(*) as freq
                FROM employment_history
                WHERE job_family = %s AND role_skill_tags IS NOT NULL
                GROUP BY skill
                ORDER BY freq DESC
                LIMIT 8;
            """, (req.target_job_family,))
            target_skills = [s[0] for s in cur.fetchall()]

            # 4. Identify skill gaps and recommend next UMBC courses
            missing_skills = set(target_skills) - acquired_skills
            recommended_courses = []
            for cid, title, tags in [(c[0], c[1], c[2]) for c in cur.execute("""
                SELECT course_id, course_title, skill_tags 
                FROM course_catalog 
                WHERE skill_tags IS NOT NULL;
            """).fetchall()]:
                if cid not in completed_courses and tags:
                    course_skills = set(tags.split("|"))
                    matched_gap = course_skills.intersection(missing_skills)
                    if matched_gap:
                        recommended_courses.append({
                            "course_id": cid,
                            "title": title,
                            "addresses_skills": list(matched_gap)
                        })

            # 5. Fetch proven Research & Campus Involvement paths from alumni in this field
            cur.execute("""
                SELECT se.experience_name, se.organization, COUNT(*) as freq
                FROM student_experience se
                JOIN alumni a ON se.campus_id = a.campus_id
                WHERE a.first_job_family = %s 
                  AND se.experience_type = 'Undergraduate Research'
                GROUP BY se.experience_name, se.organization
                ORDER BY freq DESC
                LIMIT 3;
            """, (req.target_job_family,))
            research_ops = [{"role": r[0], "lab": r[1]} for r in cur.fetchall()]

    return {
        "campus_id": req.campus_id,
        "target_career": req.target_job_family,
        "skills_acquired": list(acquired_skills)[:8],
        "skill_gaps_to_target": list(missing_skills),
        "recommended_next_courses": recommended_courses[:4],
        "undergraduate_research_pathways": research_ops
    }

class LoginRequest(BaseModel):
    email: str
    student_id: str

@app.post("/api/auth/login")
def authenticate_student(req: LoginRequest):
    # Enforce UMBC domain whitelisting
    if not req.email.lower().endswith("@umbc.edu"):
        raise HTTPException(
            status_code=403, 
            detail="Access restricted. Please sign in with an official @umbc.edu email."
        )
    
    # Verify campus_id format (e.g. CID-116490) or lookup student in students_current
    with psycopg.connect(CONN_STR) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT major, track, class_level FROM students_current WHERE campus_id = %s;", (req.student_id,))
            student = cur.fetchone()

    if not student:
        raise HTTPException(status_code=404, detail="Student ID not found in UMBC directory.")

    return {
        "status": "authenticated",
        "campus_id": req.student_id,
        "email": req.email,
        "profile": {
            "major": student[0],
            "track": student[1],
            "class_level": student[2]
        }
    }