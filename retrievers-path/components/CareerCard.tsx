"use client";

import React from "react";
import type { RecommendedField } from "@/lib/api";

const FAMILY_ICONS: Record<string, { icon: string; tint: string; border: string }> = {
  "Software Engineering": { icon: "💻", tint: "bg-teal-tint text-teal", border: "border-teal/30" },
  "Data & Analytics": { icon: "📊", tint: "bg-gold-tint text-gold-deep", border: "border-gold/30" },
  "Cybersecurity": { icon: "🛡️", tint: "bg-coral-tint text-coral", border: "border-coral/30" },
  "Machine Learning & AI": { icon: "🤖", tint: "bg-mint-tint text-mint", border: "border-mint/30" },
  "Infrastructure & Cloud": { icon: "☁️", tint: "bg-surface-2 text-ink", border: "border-line" },
  "IT Support & Operations": { icon: "⚙️", tint: "bg-surface-2 text-ink-2", border: "border-line" },
  "IT Business & Product": { icon: "📈", tint: "bg-gold-tint text-gold-deep", border: "border-gold/30" },
  "Health IT": { icon: "🏥", tint: "bg-teal-tint text-teal", border: "border-teal/30" },
};

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

interface CareerCardProps {
  field: RecommendedField;
  isSelected?: boolean;
  onSelect: (field: RecommendedField) => void;
  onDrillDown: (field: RecommendedField) => void;
}

export default function CareerCard({ field, isSelected, onSelect, onDrillDown }: CareerCardProps) {
  const theme = FAMILY_ICONS[field.job_family] || { icon: "🎯", tint: "bg-surface-2 text-ink", border: "border-line" };

  return (
    <div
      className={`glass-card p-5 lg:p-6 grid gap-4 transition-all duration-200 border-2 ${
        isSelected ? "border-gold ring-2 ring-gold/40 shadow-lg scale-[1.01]" : `${theme.border} hover:border-gold`
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`grid place-items-center w-12 h-12 rounded-2xl text-2xl ${theme.tint}`}>
            {theme.icon}
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink leading-tight">{field.job_family}</h3>
            <p className="text-xs text-ink-3">
              {field.historical_alumni_count.toLocaleString()} alumni placed
            </p>
          </div>
        </div>

        {/* Match Score Badge */}
        <div className="text-right">
          <span className="inline-block rounded-full bg-gold-tint px-2.5 py-1 text-xs font-bold text-gold-deep">
            {field.match_score}% match
          </span>
          <div className="w-16 h-1.5 bg-surface-2 rounded-full mt-1.5 ml-auto overflow-hidden">
            <div
              className="h-full bg-gold rounded-full"
              style={{ width: `${Math.min(100, field.match_score * 2.5)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Salary & Metrics */}
      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-surface-2">
        <div>
          <span className="text-xs text-ink-3 block font-medium">Median Starting Salary</span>
          <span className="font-display text-base font-bold text-teal">
            {formatCurrency(field.median_starting_salary)}
          </span>
        </div>
        <div>
          <span className="text-xs text-ink-3 block font-medium">Historical Placement</span>
          <span className="font-display text-base font-bold text-ink">
            {field.historical_alumni_count} grads
          </span>
        </div>
      </div>

      {/* Entry-level Roles */}
      {field.entry_roles && field.entry_roles.length > 0 && (
        <div className="grid gap-1.5">
          <span className="text-xs font-semibold text-ink-3 uppercase tracking-wide">Common Entry Roles</span>
          <div className="flex flex-wrap gap-1.5">
            {field.entry_roles.map((role) => (
              <span
                key={role}
                className="rounded-lg bg-surface border border-line px-2 py-1 text-xs font-medium text-ink-2"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-line">
        <button
          type="button"
          onClick={() => onDrillDown(field)}
          className="press flex-1 rounded-full border border-teal text-teal hover:bg-teal-tint px-3 py-2 text-xs font-bold transition-colors text-center"
        >
          🔍 View Career Insights
        </button>
        <button
          type="button"
          onClick={() => onSelect(field)}
          className={`press rounded-full px-4 py-2 text-xs font-bold transition-all ${
            isSelected
              ? "bg-gold text-on-gold font-bold shadow-sm"
              : "bg-surface border border-line hover:border-gold text-ink"
          }`}
        >
          {isSelected ? "✓ Selected Target" : "Select Target"}
        </button>
      </div>
    </div>
  );
}
