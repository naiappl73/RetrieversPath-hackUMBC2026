import urllib.request
import json

BASE_URL = "http://127.0.0.1:8000"

def test_endpoints():
    print("Testing RetrieversPath Backend Endpoints...")

    # 1. Test Login
    login_req = urllib.request.Request(
        f"{BASE_URL}/api/auth/login",
        data=json.dumps({"email": "test@umbc.edu", "student_id": "CID-116490"}).encode(),
        headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(login_req) as res:
        login_data = json.loads(res.read())
        assert login_data["status"] == "authenticated"
        print("✓ POST /api/auth/login passed")

    # 2. Test Recommendations
    rec_req = urllib.request.Request(
        f"{BASE_URL}/api/recommendations",
        data=json.dumps({"major": "Computer Science", "track": "Software Engineering"}).encode(),
        headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(rec_req) as res:
        rec_data = json.loads(res.read())
        assert len(rec_data["recommended_fields"]) > 0
        print("✓ POST /api/recommendations passed")

    # 3. Test Career Insights
    with urllib.request.urlopen(f"{BASE_URL}/api/careers/insights?job_family=Software%20Engineering") as res:
        insights_data = json.loads(res.read())
        assert "salary_benchmarks" in insights_data
        print("✓ GET /api/careers/insights passed")
        
    # 4. Test Personalized Roadmap
    road_req = urllib.request.Request(
        f"{BASE_URL}/api/roadmap/generate",
        data=json.dumps({"campus_id": "CID-116490", "target_job_family": "Software Engineering"}).encode(),
        headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(road_req) as res:
        road_data = json.loads(res.read())
        assert "recommended_next_courses" in road_data
        print("✓ POST /api/roadmap/generate passed")

    print("\nAll backend integration tests passed successfully.")

if __name__ == "__main__":
    test_endpoints()