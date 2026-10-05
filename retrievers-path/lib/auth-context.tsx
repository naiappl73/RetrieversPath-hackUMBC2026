"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api, type LoginResponse } from "@/lib/api";
import {
  loadAuthUser,
  saveAuthUser,
  clearAuthUser,
  loadTargetJobFamily,
  saveTargetJobFamily,
  type AuthUser,
} from "@/lib/storage";

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isGuest: boolean;
  ready: boolean;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (email: string, studentId: string) => Promise<LoginResponse>;
  loginAsGuest: (major?: string, track?: string) => void;
  logout: () => void;
  targetJobFamily: string;
  setTargetJobFamily: (jobFamily: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [targetJobFamily, setTargetJobFamilyState] = useState<string>("Data & Analytics");

  useEffect(() => {
    const savedUser = loadAuthUser();
    if (savedUser) {
      setUser(savedUser);
    }
    const savedTarget = loadTargetJobFamily();
    if (savedTarget) {
      setTargetJobFamilyState(savedTarget);
    }
    setReady(true);
  }, []);

  const openLoginModal = useCallback(() => setIsLoginModalOpen(true), []);
  const closeLoginModal = useCallback(() => setIsLoginModalOpen(false), []);

  const setTargetJobFamily = useCallback((jobFamily: string) => {
    setTargetJobFamilyState(jobFamily);
    saveTargetJobFamily(jobFamily);
  }, []);

  const login = useCallback(async (email: string, studentId: string): Promise<LoginResponse> => {
    const res = await api.login({ email, student_id: studentId });
    const authUser: AuthUser = {
      campusId: res.campus_id,
      email: res.email || email,
      major: res.profile.major,
      track: res.profile.track,
      classLevel: res.profile.class_level,
      isGuest: false,
    };
    setUser(authUser);
    saveAuthUser(authUser);
    setIsLoginModalOpen(false);
    return res;
  }, []);

  const loginAsGuest = useCallback((major = "Computer Science", track = "General") => {
    const guestUser: AuthUser = {
      campusId: "",
      email: "",
      major,
      track,
      classLevel: "Undergraduate",
      isGuest: true,
    };
    setUser(guestUser);
    saveAuthUser(guestUser);
    setIsLoginModalOpen(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    clearAuthUser();
  }, []);

  const isAuthenticated = Boolean(user && !user.isGuest && user.campusId);
  const isGuest = Boolean(user?.isGuest);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isGuest,
        ready,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        loginAsGuest,
        logout,
        targetJobFamily,
        setTargetJobFamily,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
