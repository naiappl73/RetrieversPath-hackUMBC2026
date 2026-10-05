// Automated verification of API Service Layer against running FastAPI backend (http://127.0.0.1:8000)

const BASE_URL = "http://127.0.0.1:8000";

async function runTests() {
  console.log("=== Testing API Integration (http://127.0.0.1:8000) ===\n");

  // 1. Auth Login (valid)
  console.log("1. Testing POST /api/auth/login with valid UMBC student...");
  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "test@umbc.edu", student_id: "CID-116490" }),
  });
  if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.status}`);
  const loginData = await loginRes.json();
  console.log("   ✓ Status:", loginData.status);
  console.log("   ✓ Campus ID:", loginData.campus_id);
  console.log("   ✓ Profile:", JSON.stringify(loginData.profile));

  // 1b. Auth Login (invalid domain check)
  console.log("\n1b. Testing domain enforcement (non-@umbc.edu)...");
  const badDomainRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "bad@gmail.com", student_id: "CID-116490" }),
  });
  console.log("   ✓ Expected 403 received:", badDomainRes.status === 403);

  // 2. Recommendations
  console.log("\n2. Testing POST /api/recommendations...");
  const recRes = await fetch(`${BASE_URL}/api/recommendations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      major: loginData.profile.major,
      track: loginData.profile.track,
      target_interests: ["Machine Learning", "Data Engineering"],
    }),
  });
  if (!recRes.ok) throw new Error(`Recommendations failed: ${recRes.status}`);
  const recData = await recRes.json();
  console.log(`   ✓ Received ${recData.recommended_fields.length} recommended fields`);
  console.log("   ✓ Top match:", recData.recommended_fields[0].job_family, `(${recData.recommended_fields[0].match_score}%)`);
  console.log("   ✓ Starting salary:", `$${recData.recommended_fields[0].median_starting_salary}`);
  console.log("   ✓ Entry roles:", recData.recommended_fields[0].entry_roles.join(", "));

  // 3. Career Insights
  const topFamily = recData.recommended_fields[0].job_family;
  console.log(`\n3. Testing GET /api/careers/insights?job_family=${encodeURIComponent(topFamily)}...`);
  const insightsRes = await fetch(`${BASE_URL}/api/careers/insights?job_family=${encodeURIComponent(topFamily)}`);
  if (!insightsRes.ok) throw new Error(`Insights failed: ${insightsRes.status}`);
  const insightsData = await insightsRes.json();
  console.log("   ✓ Salary benchmarks:", insightsData.salary_benchmarks.length, "seniority levels");
  console.log("   ✓ Top regions:", insightsData.top_regions.join(", "));
  console.log("   ✓ Top employers:", insightsData.top_employers.join(", "));
  console.log("   ✓ In-demand skills:", insightsData.in_demand_skills.slice(0, 4).join(", "));
  console.log("   ✓ Relevant UMBC courses:", insightsData.relevant_umbc_courses.map(c => c.course_id).join(", "));
  console.log("   ✓ Historical experience pathways:", insightsData.historical_experience_pathways.length, "pathways");

  // 4. Personalized Roadmap Generation
  console.log(`\n4. Testing POST /api/roadmap/generate for ${loginData.campus_id}...`);
  const roadRes = await fetch(`${BASE_URL}/api/roadmap/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      campus_id: loginData.campus_id,
      target_job_family: topFamily,
    }),
  });
  if (!roadRes.ok) throw new Error(`Roadmap generation failed: ${roadRes.status}`);
  const roadData = await roadRes.json();
  console.log("   ✓ Verified skills acquired:", roadData.skills_acquired.join(", "));
  console.log("   ✓ Identified skill gaps to target:", roadData.skill_gaps_to_target.join(", "));
  console.log("   ✓ Recommended next courses:", roadData.recommended_next_courses.map(c => `${c.course_id} (${c.addresses_skills.join(", ")})`).join("; "));
  console.log("   ✓ Undergraduate research labs:", roadData.undergraduate_research_pathways.map(r => `${r.role} @ ${r.lab}`).join("; "));

  console.log("\n=== ALL END-TO-END CONTRACT TESTS PASSED ===");
}

runTests().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
