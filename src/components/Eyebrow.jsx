import React from "react";

export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 text-brand text-xs sm:text-sm font-mono tracking-[0.2em]">
      <span className="w-6 h-px bg-brand" />
      {children}
      <span className="w-6 h-px bg-brand" />
    </div>
  );
}
