import React from "react";
import { MATERIALS } from "../data/content.js";

export default function Materials() {
  return (
    <section className="bg-forest text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-center gap-2 text-brand text-xs sm:text-sm font-mono tracking-[0.2em] mb-3">
          <span className="w-6 h-px bg-brand" />
          MATERIAIS
          <span className="w-6 h-px bg-brand" />
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl max-w-md">
          O material certo para cada peça
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MATERIALS.map((m) => (
            <div key={m.code} className="border border-white/15 rounded-2xl hover:-translate-y-2 transition-all p-5 bg-white/[0.03]">
              <span className="font-mono text-brand text-sm">{m.code}</span>
              <h3 className="font-display font-bold mt-1">{m.label}</h3>
              <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40 font-mono">
          * disponibilidade de material pode variar conforme o pedido — confirme no WhatsApp.
        </p>
      </div>
    </section>
  );
}
