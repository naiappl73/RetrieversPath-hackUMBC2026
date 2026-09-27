"use client";

import React, { useEffect, useRef } from "react";
import type { CareerInsightsResponse } from "@/lib/api";

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

interface CareerInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  insights: CareerInsightsResponse | null;
  loading: boolean;
  error: string | null;
  onSelectAndRoadmap: (jobFamily: string) => void;
}

export default function CareerInsightsModal({
  isOpen,
  onClose,
  insights,
  loading,
  error,
  onSelectAndRoadmap,
}: CareerInsightsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-insights-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="w-full max-w-3xl my-auto rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-2xl glass-strong pop relative max-h-[90vh] overflow-y-auto grid gap-6"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ink-3 hover:text-ink rounded-full hover:bg-surface-2 transition-colors z-10"
          aria-label="Close career insights modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {loading ? (
          <div className="py-16 text-center grid gap-4 place-items-center animate-pulse" aria-busy="true">
            <div className="w-12 h-12 rounded-full border-4 border-gold border-t-transparent animate-spin" />
            <div className="grid gap-2">
              <h3 className="font-display text-xl font-bold text-ink">Analyzing Historical Alumni Data...</h3>
              <p className="text-sm text-ink-2 max-w-sm">
                Querying PostgreSQL database (~140k records) for salary benchmarks, top employers, and course mappings.
              </p>
            </div>
            <div className="w-full max-w-md h-8 bg-surface-2 rounded-xl mt-4" />
            <div className="w-full max-w-md h-28 bg-surface-2 rounded-xl" />
          </div>
        ) : error ? (
          <div className="py-12 text-center grid gap-4">
            <div className="w-12 h-12 rounded-full bg-coral-tint text-coral grid place-items-center mx-auto text-xl font-bold">
              !
            </div>
            <h3 className="font-display text-xl font-bold text-coral">Failed to Load Career Insights</h3>
            <p className="text-sm text-ink-2 max-w-md mx-auto">{error}</p>
            <button
              type="button"
              onClick={onClose}
              className="press mx-auto rounded-full bg-surface border border-line px-5 py-2 text-sm font-semibold hover:bg-surface-2"
            >
              Close
            </button>
          </div>
        ) : insights ? (
          <>
            {/* Header */}
            <div className="border-b border-line pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1 uppercase tracking-wide">
                    Historical Insights
                  </span>
                  <h2 id="career-insights-title" className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1.5">
                    {insights.job_family}
                  </h2>
                  <p className="text-sm text-ink-2">
                    Verified employment metrics &amp; course mappings from UMBC alumni.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectAndRoadmap(insights.job_family)}
                  className="press rounded-full bg-gold px-5 py-2.5 font-bold text-on-gold hover:bg-gold-soft shadow-md text-sm"
                >
                  🚀 Build Roadmap for This Field →
                </button>
              </div>
            </div>

            {/* 1. Salary Benchmarks across seniority levels */}
            {insights.salary_benchmarks && insights.salary_benchmarks.length > 0 && (
              <section aria-labelledby="salary-benchmarks-title" className="grid gap-3">
                <div className="flex items-center justify-between">
                  <h3 id="salary-benchmarks-title" className="font-display text-lg font-bold text-ink flex items-center gap-2">
                    <span>💵</span> Salary Benchmarks by Seniority
                  </h3>
                  <span className="text-xs text-ink-3">Median vs 75th Percentile</span>
                </div>
                <div className="grid gap-2">
                  {insights.salary_benchmarks.map((bench) => {
                    const maxSal = 200000;
                    const medianPct = Math.min(100, (bench.median / maxSal) * 100);
                    const p75Pct = Math.min(100, (bench["75th_percentile"] / maxSal) * 100);

                    return (
                      <div
                        key={bench.seniority}
                        className="rounded-xl border border-line bg-surface-2 p-3 grid gap-1.5"
                      >
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-ink">{bench.seniority} Level</span>
                          <div className="flex gap-4 font-mono text-xs">
                            <span className="text-teal font-semibold">
                              Median: {formatCurrency(bench.median)}
                            </span>
                            <span className="text-ink-2">
                              75th %ile: {formatCurrency(bench["75th_percentile"])}
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-2.5 bg-bg rounded-full overflow-hidden relative">
                          <div
                            className="h-full bg-teal/40 rounded-full absolute left-0"
                            style={{ width: `${p75Pct}%` }}
                          />
                          <div
                            className="h-full bg-teal rounded-full absolute left-0"
                            style={{ width: `${medianPct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 2. Top Regions & Top Employers */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Top Regions */}
              <section className="glass-card p-4 grid gap-2.5">
                <h3 className="font-display text-sm font-bold text-ink flex items-center gap-2">
                  <span>📍</span> Top Hiring Regions
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {insights.top_regions?.map((reg) => (
                    <span
                      key={reg}
                      className="rounded-full bg-surface border border-line px-3 py-1 text-xs font-semibold text-ink-2"
                    >
                      {reg}
                    </span>
                  ))}
                </div>
              </section>

              {/* Top Employers */}
              <section className="glass-card p-4 grid gap-2.5">
                <h3 className="font-display text-sm font-bold text-ink flex items-center gap-2">
                  <span>🏢</span> Top Hiring Employers
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {insights.top_employers?.map((emp) => (
                    <span
                      key={emp}
                      className="rounded-full bg-surface border border-line px-3 py-1 text-xs font-semibold text-ink-2"
                    >
                      {emp}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* 3. In-Demand Skills */}
            {insights.in_demand_skills && insights.in_demand_skills.length > 0 && (
              <section className="grid gap-2">
                <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                  <span>⚡</span> High In-Demand Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {insights.in_demand_skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gold-tint text-gold-deep border border-gold/30 px-3 py-1 text-xs font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Relevant UMBC Catalog Courses */}
            {insights.relevant_umbc_courses && insights.relevant_umbc_courses.length > 0 && (
              <section className="grid gap-3 border-t border-line pt-4">
                <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                  <span>🎓</span> Matching UMBC Catalog Courses
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {insights.relevant_umbc_courses.map((course) => (
                    <div
                      key={course.course_id}
                      className="rounded-xl border border-line bg-surface-2 p-3.5 grid gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-teal bg-teal-tint px-2 py-0.5 rounded">
                          {course.course_id}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-ink">{course.title}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.teaches_skills.map((s) => (
                          <span key={s} className="text-[11px] font-medium bg-surface border border-line px-2 py-0.5 rounded text-ink-3">
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Historical Experience Pathways */}
            {insights.historical_experience_pathways && insights.historical_experience_pathways.length > 0 && (
              <section className="grid gap-3 border-t border-line pt-4">
                <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                  <span>🔬</span> Proven Campus Research &amp; Internship Pathways
                </h3>
                <div className="grid gap-2">
                  {insights.historical_experience_pathways.map((exp, idx) => (
                    <div
                      key={`${exp.title}-${exp.organization}-${idx}`}
                      className="flex items-center justify-between rounded-xl bg-bg border border-line p-3 text-sm"
                    >
                      <div className="grid">
                        <span className="font-semibold text-ink">{exp.title}</span>
                        <span className="text-xs text-ink-3">{exp.organization}</span>
                      </div>
                      <span className="rounded-full bg-mint-tint text-mint text-xs font-bold px-2.5 py-1 shrink-0">
                        {exp.type}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-line">
              <button
                type="button"
                onClick={onClose}
                className="press rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:bg-surface-2"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onSelectAndRoadmap(insights.job_family)}
                className="press rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-on-gold hover:bg-gold-soft shadow-md"
              >
                Build Roadmap for {insights.job_family} →
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
