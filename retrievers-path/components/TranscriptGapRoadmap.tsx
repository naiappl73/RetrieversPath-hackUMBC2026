"use client";

import React from "react";
import type { RoadmapResponse } from "@/lib/api";

const TARGET_CAREER_OPTIONS = [
  "Data & Analytics",
  "Software Engineering",
  "Cybersecurity",
  "Machine Learning & AI",
  "Infrastructure & Cloud",
  "IT Business & Product",
  "IT Support & Operations",
  "Health IT",
];

interface TranscriptGapRoadmapProps {
  roadmap: RoadmapResponse | null;
  loading: boolean;
  error: string | null;
  selectedTarget: string;
  onTargetChange: (newTarget: string) => void;
  onAddCourseToPlan?: (course: { course_id: string; title: string; addresses_skills: string[] }) => void;
  onAddLabToPlan?: (lab: { role: string; lab: string }) => void;
}

export default function TranscriptGapRoadmap({
  roadmap,
  loading,
  error,
  selectedTarget,
  onTargetChange,
  onAddCourseToPlan,
  onAddLabToPlan,
}: TranscriptGapRoadmapProps) {
  return (
    <section aria-labelledby="roadmap-diff-title" className="glass-card p-5 lg:p-7 grid gap-6 rise border-2 border-gold/40">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1">
              ⚡ Live Transcript Diff
            </span>
            <span className="font-mono text-xs font-semibold text-ink-3">
              {roadmap ? roadmap.campus_id : "Active Student"}
            </span>
          </div>
          <h2 id="roadmap-diff-title" className="font-display text-2xl lg:text-3xl font-bold text-ink">
            Target Career: {selectedTarget}
          </h2>
          <p className="text-sm text-ink-2">
            Automated transcript analysis comparing your completed UMBC courses against historical alumni in this field.
          </p>
        </div>

        {/* Target Switcher */}
        <div className="flex items-center gap-2">
          <label htmlFor="target-career-select" className="text-xs font-semibold text-ink-3 whitespace-nowrap">
            Switch Target:
          </label>
          <select
            id="target-career-select"
            value={selectedTarget}
            onChange={(e) => onTargetChange(e.target.value)}
            disabled={loading}
            className="rounded-xl border border-line bg-bg px-3.5 py-2 text-sm font-semibold text-ink outline-none focus:border-gold"
          >
            {TARGET_CAREER_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="py-12 text-center grid gap-3 place-items-center animate-pulse" aria-busy="true">
          <div className="w-10 h-10 rounded-full border-4 border-gold border-t-transparent animate-spin" />
          <h3 className="font-display text-lg font-bold text-ink">Diffing Transcripts with Target Requirements...</h3>
          <p className="text-xs text-ink-3 max-w-sm">
            Fetching course history and matching skill graphs from PostgreSQL.
          </p>
        </div>
      ) : error ? (
        <div className="py-8 text-center grid gap-3">
          <p className="text-sm text-coral font-medium">{error}</p>
          <button
            type="button"
            onClick={() => onTargetChange(selectedTarget)}
            className="press mx-auto rounded-full bg-surface border border-line px-4 py-2 text-xs font-bold hover:bg-surface-2"
          >
            Retry Analysis
          </button>
        </div>
      ) : roadmap ? (
        <>
          {/* Skills Acquired & Gaps Comparison */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Acquired Skills */}
            <div className="rounded-2xl border border-mint/30 bg-mint-tint/30 p-4 lg:p-5 grid gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-bold text-ink flex items-center gap-1.5">
                  <span className="text-mint font-bold">✓</span> Skills You Already Have
                </h3>
                <span className="text-xs font-mono font-bold text-mint">
                  {roadmap.skills_acquired.length} verified
                </span>
              </div>
              <p className="text-xs text-ink-2">
                Derived from your completed UMBC coursework (excluding W, F, IP).
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {roadmap.skills_acquired.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface border border-mint/40 px-3 py-1 text-xs font-bold text-ink shadow-sm"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Gaps */}
            <div className="rounded-2xl border border-coral/30 bg-coral-tint/30 p-4 lg:p-5 grid gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-bold text-ink flex items-center gap-1.5">
                  <span className="text-coral font-bold">⚡</span> Identified Skill Gaps
                </h3>
                <span className="text-xs font-mono font-bold text-coral">
                  {roadmap.skill_gaps_to_target.length} to bridge
                </span>
              </div>
              <p className="text-xs text-ink-2">
                Key competencies prioritized by employers in {roadmap.target_career}.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {roadmap.skill_gaps_to_target.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface border border-coral/40 px-3 py-1 text-xs font-bold text-coral shadow-sm"
                  >
                    ● {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Next Courses */}
          <div className="grid gap-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                  <span>🎯</span> Recommended Next UMBC Courses
                </h3>
                <p className="text-xs text-ink-2">
                  Courses that directly address your identified skill gaps.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {roadmap.recommended_next_courses.map((course) => (
                <div
                  key={course.course_id}
                  className="rounded-xl border border-line bg-surface p-4 grid gap-2 hover:border-gold transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-gold-deep bg-gold-tint px-2.5 py-1 rounded-lg">
                      {course.course_id}
                    </span>
                    {onAddCourseToPlan && (
                      <button
                        type="button"
                        onClick={() => onAddCourseToPlan(course)}
                        className="press text-xs font-bold text-teal hover:underline"
                        title="Add to my semester checklist"
                      >
                        ＋ Add to Plan
                      </button>
                    )}
                  </div>

                  <h4 className="font-semibold text-sm text-ink">{course.title}</h4>

                  <div className="grid gap-1 pt-1 border-t border-line">
                    <span className="text-[11px] font-semibold text-ink-3">Bridges Gaps In:</span>
                    <div className="flex flex-wrap gap-1">
                      {course.addresses_skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-teal-tint text-teal px-2 py-0.5 text-xs font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Undergraduate Research Pathways */}
          {roadmap.undergraduate_research_pathways && roadmap.undergraduate_research_pathways.length > 0 && (
            <div className="grid gap-3 pt-2 border-t border-line">
              <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                <span>🔬</span> Proven UMBC Research Labs for This Target
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {roadmap.undergraduate_research_pathways.map((path, idx) => (
                  <div
                    key={`${path.lab}-${idx}`}
                    className="rounded-xl border border-line bg-surface-2 p-3.5 grid gap-1.5"
                  >
                    <span className="text-xs font-bold text-mint bg-mint-tint px-2 py-0.5 rounded w-max">
                      Research Lab
                    </span>
                    <h4 className="font-semibold text-sm text-ink">{path.lab}</h4>
                    <p className="text-xs text-ink-3">{path.role}</p>
                    {onAddLabToPlan && (
                      <button
                        type="button"
                        onClick={() => onAddLabToPlan(path)}
                        className="press text-xs font-bold text-teal text-left mt-1 hover:underline"
                      >
                        ＋ Add to Experience
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : null}
    </section>
  );
}
