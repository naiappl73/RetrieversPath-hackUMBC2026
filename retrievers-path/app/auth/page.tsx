"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function AuthPage() {
  const router = useRouter();
  const { login, loginAsGuest, isAuthenticated, user } = useAuth();
  const [email, setEmail] = useState("test@umbc.edu");
  const [studentId, setStudentId] = useState("CID-116490");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (isAuthenticated && user) {
    return (
      <main className="mx-auto max-w-md p-6 my-16 text-center grid gap-4 glass-card">
        <h1 className="font-display text-2xl font-bold">Already Signed In</h1>
        <p className="text-sm text-ink-2">Signed in as {user.campusId} ({user.major})</p>
        <button
          onClick={() => router.push("/start")}
          className="press bg-gold text-on-gold rounded-full px-6 py-2.5 font-bold mx-auto"
        >
          Go to Career Explorer →
        </button>
      </main>
    );
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(email, studentId);
      router.push("/start");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md p-6 sm:p-8 my-16 grid gap-6 glass-card rise">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">UMBC Student Sign In</h1>
        <p className="text-sm text-ink-2">Sign in with your official @umbc.edu email and Campus ID</p>
      </div>

      {error && <p className="rounded-xl bg-coral-tint text-coral text-sm p-3 font-semibold">{error}</p>}

      <form onSubmit={handleLogin} className="grid gap-4">
        <div className="grid gap-1">
          <label htmlFor="auth-email" className="text-sm font-semibold text-ink">UMBC Email</label>
          <input
            id="auth-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-xl border border-line bg-bg px-3.5 py-2.5 text-sm outline-none focus:border-gold"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="auth-id" className="text-sm font-semibold text-ink">Campus ID</label>
          <input
            id="auth-id"
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="rounded-xl border border-line bg-bg px-3.5 py-2.5 text-sm font-mono outline-none focus:border-gold"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="press bg-gold text-on-gold rounded-full px-6 py-3 font-bold hover:bg-gold-soft shadow-md disabled:opacity-50 mt-2"
        >
          {loading ? "Authenticating..." : "Sign In with Campus ID"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => { loginAsGuest(); router.push("/start"); }}
        className="text-xs text-center text-teal hover:underline pt-1"
      >
        Continue as Guest instead →
      </button>
    </main>
  );
}