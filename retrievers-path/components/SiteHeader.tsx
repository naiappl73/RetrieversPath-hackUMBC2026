"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccessibilityPanel from "@/components/AccessibilityPanel";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/lib/auth-context";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/paths", label: "Programs" },
  { href: "/start", label: "Explore Careers" },
  { href: "/roadmap", label: "My plan" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const wrap = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, isGuest, openLoginModal, logout } = useAuth();

  // Close the panel on Escape, a click outside it, or a page change.
  useEffect(() => {
    if (!open && !userMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setUserMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, userMenuOpen]);

  useEffect(() => {
    setOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => href !== "/#how" && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <>
      <header className="sticky top-0 z-30 px-4 pt-3">
        <nav aria-label="Main" className="glass glass-strong mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2.5">
          <Link href="/" className="press flex items-center gap-2 font-display font-bold text-lg">
            <span aria-hidden="true" className="logo-orb grid place-items-center w-8 h-8 rounded-full bg-gold text-on-gold text-sm">RP</span>
            RetrieversPath
          </Link>
          <ul className="order-last w-full flex justify-center gap-1 text-sm border-t border-line pt-2 md:order-none md:w-auto md:text-base md:border-0 md:pt-0 text-ink-2 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined}
                  className={`nav-pill rounded-full px-3 py-1.5 hover:text-ink ${isActive(l.href) ? "is-active text-ink font-semibold" : ""}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {/* Auth / Student Indicator */}
            {isAuthenticated && user ? (
              <div ref={userMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((o) => !o)}
                  className="press flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-tint px-3 py-1.5 text-xs font-bold text-gold-deep hover:bg-gold-soft/30 transition-colors"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                >
                  <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                  <span>{user.campusId}</span>
                  <span className="hidden sm:inline font-normal">({user.classLevel})</span>
                  <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {userMenuOpen && (
                  <div className="popover absolute right-0 mt-2 w-64 rounded-2xl border border-line bg-surface p-4 shadow-xl glass-strong z-40 grid gap-3">
                    <div className="border-b border-line pb-2.5">
                      <p className="text-xs font-bold text-ink-3 uppercase tracking-wider">Authenticated Student</p>
                      <p className="font-display font-bold text-ink text-base mt-0.5">{user.campusId}</p>
                      <p className="text-xs text-ink-2 truncate">{user.email}</p>
                    </div>
                    <div className="grid gap-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-ink-3">Major:</span>
                        <span className="font-semibold text-ink">{user.major}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-3">Track:</span>
                        <span className="font-semibold text-ink">{user.track}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-3">Level:</span>
                        <span className="font-semibold text-ink">{user.classLevel}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-line flex flex-col gap-1.5">
                      <button
                        type="button"
                        onClick={() => { setUserMenuOpen(false); openLoginModal(); }}
                        className="text-left text-xs font-semibold text-teal hover:underline py-1"
                      >
                        ⇄ Switch Student Account
                      </button>
                      <button
                        type="button"
                        onClick={() => { setUserMenuOpen(false); logout(); }}
                        className="text-left text-xs font-semibold text-coral hover:underline py-1"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : isGuest ? (
              <button
                type="button"
                onClick={openLoginModal}
                className="press flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal-tint px-3 py-1.5 text-xs font-bold text-teal hover:bg-teal-tint/80"
              >
                <span>👀 Guest</span>
                <span className="hidden sm:inline font-normal">· Sign In</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="press flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold text-on-gold hover:bg-gold-soft shadow-sm"
              >
                <span>Sign In</span>
              </button>
            )}

            <Link href="/settings" aria-label="Settings" title="Settings" aria-current={pathname === "/settings" ? "page" : undefined}
              className="press grid place-items-center w-9 h-9 rounded-full border border-line bg-surface hover:bg-surface-2">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[18px] h-[18px] gear" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
              </svg>
            </Link>

            {/* Accessibility Panel */}
            <div ref={wrap} className="relative">
              <button type="button" aria-expanded={open} aria-controls="a11y-panel" onClick={() => setOpen((o) => !o)}
                className="press flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 sm:px-4 py-2 text-sm font-semibold whitespace-nowrap hover:bg-surface-2">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M4 7.5 12 9l8-1.5.4 2L15 10.6V14l2 7-1.9.6L12 15l-3.1 6.6L7 21l2-7v-3.4L3.6 9.5z" />
                </svg>
                <span className="sr-only sm:not-sr-only">Accessibility</span>
              </button>
              <div id="a11y-panel" hidden={!open} className="popover absolute right-0 mt-2">
                <AccessibilityPanel />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Global Login Modal */}
      <LoginModal />
    </>
  );
}
