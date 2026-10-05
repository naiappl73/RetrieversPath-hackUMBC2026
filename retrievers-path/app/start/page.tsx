"use client";

import React, { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { api, type RecommendedField, type CareerInsightsResponse } from "@/lib/api";
import CareerCard from "@/components/CareerCard";
import CareerInsightsModal from "@/components/CareerInsightsModal";
import { buildBuiltinPlan, finalizePlan } from "@/lib/plan";
import { saveNewPlan } from "@/lib/storage";

const MAJORS_DATA: Record<string, string[]> = {
  "Computer Science": [
    "Data Science",
    "Software Engineering",
    "Artificial Intelligence",
    "Cybersecurity",
    "General",
  ],
  "Information Systems": [
    "Business Analytics",
    "Cybersecurity Management",
    "Health Information Technology",
    "Software Development",
    "General",
  ],
};

const INTEREST_OPTIONS = [
  "Machine Learning",
  "Data Engineering",
  "Cybersecurity",
  "Cloud & DevOps",
  "Software Engineering",
  "Web & Full-Stack",
  "Health IT & Biomedical",
  "Systems Architecture",
  "Database Design",
];

function QuestionnaireContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated, isGuest, openLoginModal, targetJobFamily, setTargetJobFamily } = useAuth();

  // State for Major & Track
  const [major, setMajor] = useState<string>("Computer Science");
  const [track, setTrack] = useState<string>("Data Science");
  const [targetInterests, setTargetInterests] = useState<string[]>(["Machine Learning", "Data Engineering"]);

  // Recommendations state
  const [recommendations, setRecommendations] = useState<RecommendedField[] | null>(null);
  const [loadingRecs, setLoadingRecs] = useState<boolean>(false);
  const [recsError, setRecsError] = useState<string | null>(null);

  // Insights drill-down state
  const [isInsightsOpen, setIsInsightsOpen] = useState<boolean>(false);
  const [selectedField, setSelectedField] = useState<RecommendedField | null>(null);
  const [insights, setInsights] = useState<CareerInsightsResponse | null>(null);
  const [loadingInsights, setLoadingInsights] = useState<boolean>(false);
  const [insightsError, setInsightsError] = useState<string | null>(null);

  // Auto-populate when user is authenticated
  useEffect(() => {
    if (user && !user.isGuest) {
      if (user.major && MAJORS_DATA[user.major]) {
        setMajor(user.major);
        setTrack(user.track || MAJORS_DATA[user.major][0]);
      }
    }
  }, [user]);

  // Handle URL preset param (e.g. ?program=is-bs)
  useEffect(() => {
    const preset = searchParams.get("program");
    if (preset === "is-bs") {
      setMajor("Information Systems");
      setTrack("Business Analytics");
    } else if (preset === "cs-bs") {
      setMajor("Computer Science");
      setTrack("Data Science");
    }
  }, [searchParams]);

  // Function to fetch recommendations
  const fetchRecommendations = useCallback(
    async (m: string, t: string, interests: string[]) => {
      setLoadingRecs(true);
      setRecsError(null);
      try {
        const res = await api.getRecommendations({
          major: m,
          track: t,
          target_interests: interests,
        });
        setRecommendations(res.recommended_fields || []);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to load career recommendations.";
        setRecsError(msg);
      } finally {
        setLoadingRecs(false);
      }
    },
    []
  );

  // Auto-fetch recommendations on mount or when student logs in
  useEffect(() => {
    fetchRecommendations(major, track, targetInterests);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [major, track]);

  // Handle form submit
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchRecommendations(major, track, targetInterests);
  }

  // Toggle interest
  function toggleInterest(item: string) {
    setTargetInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  // Handle drill-down
  async function handleDrillDown(field: RecommendedField) {
    setSelectedField(field);
    setIsInsightsOpen(true);
    setLoadingInsights(true);
    setInsightsError(null);
    try {
      const data = await api.getCareerInsights(field.job_family);
      setInsights(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load insights for this career.";
      setInsightsError(msg);
    } finally {
      setLoadingInsights(false);
    }
  }

  // Handle selecting target and proceeding to roadmap
  function handleSelectAndRoadmap(jobFamily: string) {
    setTargetJobFamily(jobFamily);
    setIsInsightsOpen(false);

    // Save a base plan for the semester planner if not already existing
    const programId = major === "Information Systems" ? "is-bs" : "cs-bs";
    const basePlan = buildBuiltinPlan({
      level: "undergrad",
      programIds: [programId],
      minors: [],
      focusIds: [],
      customFocus: track,
      careerGoal: jobFamily,
      year: user?.classLevel || "Junior",
      experience: [],
      notes: "Generated from RetrieversPath career recommendations",
    });
    saveNewPlan(
      {
        level: "undergrad",
        programIds: [programId],
        minors: [],
        focusIds: [],
        customFocus: track,
        careerGoal: jobFamily,
        year: user?.classLevel || "Junior",
        experience: [],
        notes: "",
      },
      finalizePlan(basePlan, "builtin")
    );

    router.push("/roadmap");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14 grid gap-10">
      {/* Top Banner & Authentication Context */}
      <section className="glass-card p-6 lg:p-8 grid gap-4 rise">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="grid gap-1">
            <span className="w-max rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1">
              Historical Placement Engine
            </span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-ink">
              Explore Career Matches
            </h1>
            <p className="text-base text-ink-2 max-w-2xl">
              Backed by PostgreSQL with ~140,000 historical UMBC records. See exact placement rates,
              median starting salaries, and verified entry roles for your degree path.
            </p>
          </div>

          {/* Student Status Card */}
          <div className="rounded-2xl border border-line bg-surface-2 p-4 min-w-[260px] grid gap-2">
            {isAuthenticated && user ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-mint" />
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-3">
                    Connected Student
                  </span>
                </div>
                <p className="font-display font-bold text-ink text-lg leading-none">
                  {user.campusId}
                </p>
                <p className="text-xs text-ink-2">
                  {user.classLevel} · {user.major} ({user.track})
                </p>
                <div className="pt-2 border-t border-line flex gap-2">
                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="text-xs text-teal hover:underline font-semibold"
                  >
                    ⇄ Switch Student
                  </button>
                </div>
              </>
            ) : isGuest ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">
                    Guest Mode
                  </span>
                </div>
                <p className="text-xs text-ink-2">
                  You are exploring as a guest. Manual degree selection is enabled below.
                </p>
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="press rounded-full bg-gold text-on-gold px-3.5 py-1.5 text-xs font-bold hover:bg-gold-soft mt-1"
                >
                  Sign In with Campus ID
                </button>
              </>
            ) : (
              <>
                <p className="text-xs font-bold text-ink">Have a UMBC Student ID?</p>
                <p className="text-xs text-ink-2">
                  Sign in to auto-populate your program and run live transcript gap diffing.
                </p>
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="press rounded-full bg-gold text-on-gold px-4 py-2 text-xs font-bold hover:bg-gold-soft shadow-sm mt-1"
                >
                  ⚡ Sign In / Demo Student
                </button>
              </>
            )}
          </div>
        </div>

        {/* Auto-populate notice */}
        {isAuthenticated && user && (
          <div className="rounded-xl border border-teal/30 bg-teal-tint/40 p-3 flex items-center justify-between text-xs text-teal">
            <span>
              ✓ <strong>Auto-populated:</strong> Major and track loaded from your student directory profile.
            </span>
            <span className="font-mono opacity-80">{user.email}</span>
          </div>
        )}
      </section>

      {/* Questionnaire Form */}
      <section aria-labelledby="questionnaire-title" className="glass-card p-6 lg:p-8 grid gap-6">
        <div className="border-b border-line pb-4">
          <h2 id="questionnaire-title" className="font-display text-xl font-bold text-ink">
            1. Select Your Degree &amp; Focus
          </h2>
          <p className="text-sm text-ink-2">
            Customize or confirm your academic focus to see corresponding alumni outcomes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Major Selector */}
            <div className="grid gap-2">
              <label htmlFor="major-select" className="text-sm font-semibold text-ink">
                UMBC Major
              </label>
              <select
                id="major-select"
                value={major}
                onChange={(e) => {
                  const newMajor = e.target.value;
                  setMajor(newMajor);
                  setTrack(MAJORS_DATA[newMajor][0]);
                }}
                className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-gold"
              >
                {Object.keys(MAJORS_DATA).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Track Selector */}
            <div className="grid gap-2">
              <label htmlFor="track-select" className="text-sm font-semibold text-ink">
                Academic Track
              </label>
              <select
                id="track-select"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-gold"
              >
                {MAJORS_DATA[major]?.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Target Interests */}
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-ink">
              Target Interests &amp; Industry Directions{" "}
              <span className="font-normal text-ink-3">(Select any that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {INTEREST_OPTIONS.map((interest) => {
                const isSelected = targetInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`press rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-all ${
                      isSelected
                        ? "bg-teal text-white border-teal shadow-sm"
                        : "bg-surface border-line text-ink-2 hover:border-teal"
                    }`}
                  >
                    {isSelected ? "✓ " : "+ "}
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-ink-3">
              Query: <code>POST /api/recommendations</code>
            </span>
            <button
              type="submit"
              disabled={loadingRecs}
              className="press flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-on-gold hover:bg-gold-soft shadow-md disabled:opacity-50"
            >
              {loadingRecs ? (
                <>
                  <svg className="w-5 h-5 animate-spin text-on-gold" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Querying 140k Alumni Records...</span>
                </>
              ) : (
                <span>Analyze Career Matches →</span>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* Career Match Cards Section */}
      <section aria-labelledby="recommendations-title" className="grid gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 id="recommendations-title" className="font-display text-2xl lg:text-3xl font-bold text-ink">
              2. Alumni Career Placement Matches
            </h2>
            <p className="text-sm text-ink-2">
              Historical career outcomes for <strong>{major}</strong> ({track}) graduates.
            </p>
          </div>
          {recommendations && (
            <span className="text-xs font-mono font-semibold text-ink-3 bg-surface-2 px-3 py-1.5 rounded-full">
              {recommendations.length} job families identified
            </span>
          )}
        </div>

        {loadingRecs ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse" aria-busy="true">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-surface-2" />
            ))}
          </div>
        ) : recsError ? (
          <div className="rounded-2xl border border-coral/30 bg-coral-tint p-6 text-center grid gap-3">
            <h3 className="font-bold text-coral text-lg">Unable to Load Recommendations</h3>
            <p className="text-sm text-ink-2 max-w-md mx-auto">{recsError}</p>
            <button
              type="button"
              onClick={() => fetchRecommendations(major, track, targetInterests)}
              className="press mx-auto rounded-full bg-surface border border-line px-5 py-2 text-xs font-bold hover:bg-surface-2"
            >
              Retry
            </button>
          </div>
        ) : recommendations && recommendations.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {recommendations.map((field) => (
              <CareerCard
                key={field.job_family}
                field={field}
                isSelected={targetJobFamily === field.job_family}
                onSelect={(f) => handleSelectAndRoadmap(f.job_family)}
                onDrillDown={handleDrillDown}
              />
            ))}
          </div>
        ) : (
          <p className="text-ink-3 py-8 text-center">No career matches found for this selection.</p>
        )}
      </section>

      {/* Drill-down Modal */}
      <CareerInsightsModal
        isOpen={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
        insights={insights}
        loading={loadingInsights}
        error={insightsError}
        onSelectAndRoadmap={handleSelectAndRoadmap}
      />
    </div>
  );
}

export default function Start() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-ink-3">Loading career explorer...</div>}>
      <QuestionnaireContent />
    </Suspense>
  );
}
