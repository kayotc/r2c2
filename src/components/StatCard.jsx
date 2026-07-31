import React from "react";

export default function StatCard({ label, value, small }) {
  return (
    <div className="border border-ink/10 rounded-2xl p-4 sm:p-5 bg-white">
      <p className="text-[0.7rem] uppercase tracking-wider text-ink/45 font-mono">{label}</p>
      <p className={`mt-1.5 font-display font-bold ${small ? "text-base sm:text-lg" : "text-2xl sm:text-3xl"}`}>
        {value}
      </p>
    </div>
  );
}
