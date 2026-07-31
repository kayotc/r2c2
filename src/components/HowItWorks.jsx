import React from "react";
import Eyebrow from "./Eyebrow.jsx";
import { STEPS } from "../data/content.js";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-16">
      <Eyebrow>COMO FUNCIONA</Eyebrow>
      <h2 className="font-display font-bold text-2xl sm:text-3xl mt-3">Do pedido à entrega</h2>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STEPS.map((s, i) => (
          <div key={s.n} className="relative pl-1">
            <span className="font-mono text-brand/50 text-3xl font-medium">{s.n}</span>
            <h3 className="font-display font-bold text-lg mt-2">{s.title}</h3>
            <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{s.desc}</p>
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-3 -right-2.5 w-5 h-px bg-ink/15" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
