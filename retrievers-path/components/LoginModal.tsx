"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/lib/auth-context";

const DEMO_STUDENTS = [
  { id: "CID-116490", email: "test@umbc.edu", label: "CID-116490 (CS · Junior)" },
  { id: "CID-514009", email: "test@umbc.edu", label: "CID-514009 (IS · Freshman)" },
  { id: "CID-641452", email: "test@umbc.edu", label: "CID-641452 (CS · Senior)" },
];

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login, loginAsGuest, user, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("test@umbc.edu");
  const [studentId, setStudentId] = useState("CID-116490");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"student" | "guest">("student");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isLoginModalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLoginModal();
    };
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeLoginModal();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isLoginModalOpen, closeLoginModal]);

  if (!isLoginModalOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedId = studentId.trim();

    if (!trimmedEmail.toLowerCase().endsWith("@umbc.edu")) {
      setError("Please use an official @umbc.edu email address.");
      return;
    }

    if (!trimmedId) {
      setError("Please provide a valid UMBC Campus ID (e.g. CID-116490).");
      return;
    }

    setLoading(true);
    try {
      await login(trimmedEmail, trimmedId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to sign in. Please verify your credentials.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  function handleDemoSelect(demoId: string, demoEmail: string) {
    setEmail(demoEmail);
    setStudentId(demoId);
    setError(null);
  }

  function handleGuestSubmit(e: React.FormEvent) {
    e.preventDefault();
    loginAsGuest("Computer Science", "General");
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-2xl glass-strong pop relative"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeLoginModal}
          className="absolute top-4 right-4 p-2 text-ink-3 hover:text-ink rounded-full hover:bg-surface-2 transition-colors"
          aria-label="Close authentication modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gold text-on-gold font-display font-bold text-xl shadow-md">
            RP
          </div>
          <div>
            <h2 id="login-modal-title" className="font-display text-2xl font-bold text-ink">
              RetrieversPath Sign In
            </h2>
            <p className="text-sm text-ink-2">
              Connect to your official UMBC record or explore historical alumni pathways.
            </p>
          </div>
        </div>

        {/* Auth Mode Tabs */}
        <div className="flex border-b border-line mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("student")}
            className={`flex-1 pb-3 text-sm font-semibold text-center border-b-2 transition-colors ${
              activeTab === "student"
                ? "border-gold text-ink font-bold"
                : "border-transparent text-ink-3 hover:text-ink"
            }`}
          >
            🎓 UMBC Student
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("guest")}
            className={`flex-1 pb-3 text-sm font-semibold text-center border-b-2 transition-colors ${
              activeTab === "guest"
                ? "border-teal text-ink font-bold"
                : "border-transparent text-ink-3 hover:text-ink"
            }`}
          >
            👀 Guest Explorer
          </button>
        </div>

        {error && (
          <div role="alert" className="mb-5 rounded-xl border border-coral/30 bg-coral-tint p-3.5 text-sm text-coral">
            <div className="flex items-start gap-2">
              <span className="font-bold">Error:</span>
              <p className="flex-1">{error}</p>
            </div>
          </div>
        )}

        {activeTab === "student" ? (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="auth-email" className="text-sm font-semibold text-ink">
                UMBC Email Address
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="campusid@umbc.edu"
                required
                className="w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
              <span className="text-xs text-ink-3">Must end with @umbc.edu</span>
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="auth-student-id" className="text-sm font-semibold text-ink">
                Campus ID
              </label>
              <input
                id="auth-student-id"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="e.g. CID-116490"
                required
                className="w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-sm font-mono outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            {/* Quick Demo Selector */}
            <div className="rounded-xl border border-line bg-surface-2 p-3 grid gap-2">
              <span className="text-xs font-semibold text-ink-2">⚡ Quick Demo Profiles (PostgreSQL DB):</span>
              <div className="flex flex-wrap gap-1.5">
                {DEMO_STUDENTS.map((demo) => (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={() => handleDemoSelect(demo.id, demo.email)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                      studentId === demo.id
                        ? "bg-gold text-on-gold border-gold font-bold"
                        : "bg-surface border-line text-ink-2 hover:border-gold"
                    }`}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="press mt-2 w-full flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-on-gold shadow-md hover:bg-gold-soft disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin text-on-gold" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Sign In with Campus ID</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("guest")}
              className="text-xs text-center text-ink-3 hover:text-teal underline pt-1"
            >
              Don&apos;t have a UMBC ID? Continue as Guest →
            </button>
          </form>
        ) : (
          <form onSubmit={handleGuestSubmit} className="grid gap-4">
            <div className="rounded-xl border border-teal/20 bg-teal-tint p-4">
              <h3 className="font-semibold text-teal text-sm mb-1">Explore as Guest</h3>
              <p className="text-xs text-ink-2">
                You can browse historical alumni career placements, salary percentiles, and required skills across 140,000+ UMBC records without a student login.
              </p>
            </div>

            <p className="text-xs text-ink-3">
              Note: Transcript-diffed skill gap analysis requires a Campus ID. You can sign in at any time to unlock your personalized course recommendations.
            </p>

            <button
              type="submit"
              className="press mt-2 w-full rounded-full bg-teal px-6 py-3 font-bold text-white shadow-md hover:opacity-90"
            >
              Continue as Guest
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className="text-xs text-center text-ink-3 hover:text-gold-deep underline pt-1"
            >
              ← Back to Student Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
