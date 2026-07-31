import React from "react";
import { LogoMark } from "./Logo.jsx";
import { WhatsAppIcon, Icon } from "./Icons.jsx";
import { BUSINESS_NAME, OWNER_NAME } from "../data/content.js";
import { waLink } from "../lib/whatsapp.js";

export default function Hero() {
  const scrollToProducts = (e) => {
    e.preventDefault();
    document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white scroll-mt-16">
      {/* anéis decorativos (linhas de camada) */}
      <svg
        className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] opacity-[0.12] sm:opacity-[0.15]"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        {[40, 80, 120, 160, 200].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#4CA22B" strokeWidth="1" strokeDasharray="3 5" />
        ))}
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 text-brand text-xs sm:text-sm font-mono tracking-[0.2em] mb-5">
              <span className="w-6 h-px bg-brand" />
              IMPRESSÃO 3D SOB ENCOMENDA
              <span className="w-6 h-px bg-brand" />
            </div>
            <h1 className="font-display font-bold text-[2.1rem] leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
              Da tela pra sua mão,
              <br />
              <span className="text-brand">camada por camada.</span>
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-md leading-relaxed">
              A {BUSINESS_NAME} transforma ideias em peças reais: suportes, miniaturas,
              decoração e peças personalizadas, impressas sob encomenda por {OWNER_NAME}.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(`Oi! Encontrei o site da ${BUSINESS_NAME} e quero fazer um pedido.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir no WhatsApp
              </a>
              <a
                href="#produtos"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-brand hover:text-brand text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                Ver produtos
                <Icon.chevron className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand/10 blur-2xl scale-110" />
              <LogoMark className="relative w-48 h-48 sm:w-60 sm:h-60 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* faixa de confiança */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-center sm:justify-between gap-x-8 gap-y-2 text-[0.8rem] sm:text-sm text-white/60 font-mono">
          <span>SOB ENCOMENDA</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <span>VÁRIOS MATERIAIS</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <span>ATENDIMENTO DIRETO</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <span>ACABAMENTO CUIDADOSO</span>
        </div>
      </div>
    </section>
  );
}
