/**
 * Centralized API client for RetrieversPath backend engine (FastAPI).
 * Base URL: http://127.0.0.1:8000
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "http://127.0.0.1:8000";

export class ApiError extends Error {
  status: number;
  detail?: string;

  constructor(message: string, status: number, detail?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.detail = detail;
  }
}

// ---------------- TypeScript Types ----------------

export interface StudentProfile {
  major: string;
  track: string;
  class_level: string;
}

export interface LoginRequest {
  email: string;
  student_id: string;
}

export interface LoginResponse {
  status: "authenticated";
  campus_id: string;
  email?: string;
  profile: StudentProfile;
}

export interface RecommendationsRequest {
  major: string;
  track: string;
  target_interests?: string[];
}

export interface RecommendedField {
  job_family: string;
  match_score: number;
  historical_alumni_count: number;
  median_starting_salary: number;
  entry_roles: string[];
}

export interface RecommendationsResponse {
  recommended_fields: RecommendedField[];
}

export interface SalaryBenchmark {
  seniority: string;
  median: number;
  "75th_percentile": number;
}

export interface RelevantCourse {
  course_id: string;
  title: string;
  teaches_skills: string[];
}

export interface HistoricalExperience {
  type: string;
  title: string;
  organization: string;
}

export interface CareerInsightsResponse {
  job_family: string;
  salary_benchmarks: SalaryBenchmark[];
  top_regions: string[];
  top_employers: string[];
  in_demand_skills: string[];
  relevant_umbc_courses: RelevantCourse[];
  historical_experience_pathways: HistoricalExperience[];
}

export interface RoadmapRequest {
  campus_id: string;
  target_job_family: string;
}

export interface RecommendedNextCourse {
  course_id: string;
  title: string;
  addresses_skills: string[];
}

export interface ResearchPathway {
  role: string;
  lab: string;
}

export interface RoadmapResponse {
  campus_id: string;
  target_career: string;
  skills_acquired: string[];
  skill_gaps_to_target: string[];
  recommended_next_courses: RecommendedNextCourse[];
  undergraduate_research_pathways: ResearchPathway[];
}

// ---------------- Helper fetcher ----------------

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options?.headers || {}),
      },
    });

    if (!res.ok) {
      let detail = "";
      try {
        const errJson = await res.json();
        detail = errJson.detail || errJson.message || JSON.stringify(errJson);
      } catch {
        detail = await res.text();
      }
      throw new ApiError(detail || `API request failed with status ${res.status}`, res.status, detail);
    }

    return (await res.json()) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    const message =
      error instanceof Error
        ? error.message
        : "Failed to connect to RetrieversPath backend at http://127.0.0.1:8000";
    throw new ApiError(
      `Unable to reach backend server (${message}). Ensure FastAPI is running on ${API_BASE_URL}.`,
      0
    );
  }
}

// ---------------- API Methods ----------------

/**
 * 1. POST /api/auth/login
 * Enforces @umbc.edu email domain and resolves student record (e.g. CID-116490).
 */
export async function login(req: LoginRequest): Promise<LoginResponse> {
  return request<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(req),
  });
}

/**
 * 2. POST /api/recommendations
 * Recommends career job families based on historical alumni placements for the major & track.
 */
export async function getRecommendations(req: RecommendationsRequest): Promise<RecommendationsResponse> {
  return request<RecommendationsResponse>("/api/recommendations", {
    method: "POST",
    body: JSON.stringify(req),
  });
}

/**
 * 3. GET /api/careers/insights?job_family={job_family}
 * Returns salary percentiles across seniority levels, top regions, employers, skills, and UMBC courses.
 */
export async function getCareerInsights(job_family: string): Promise<CareerInsightsResponse> {
  const query = encodeURIComponent(job_family);
  return request<CareerInsightsResponse>(`/api/careers/insights?job_family=${query}`, {
    method: "GET",
  });
}

/**
 * 4. POST /api/roadmap/generate
 * Generates an actionable career roadmap diffing transcripts against target requirements.
 */
export async function generateRoadmap(req: RoadmapRequest): Promise<RoadmapResponse> {
  return request<RoadmapResponse>("/api/roadmap/generate", {
    method: "POST",
    body: JSON.stringify(req),
  });
}

export const api = {
  login,
  getRecommendations,
  getCareerInsights,
  generateRoadmap,
};

export default api;
