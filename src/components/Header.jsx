import React, { useState } from "react";
import { LogoMark, WordMark } from "./Logo.jsx";
import { Icon, WhatsAppIcon } from "./Icons.jsx";
import { NAV, BUSINESS_NAME } from "../data/content.js";
import { waLink } from "../lib/whatsapp.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-paper border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#inicio");
          }}
          className="flex items-center gap-2"
        >
          <LogoMark className="w-9 h-9" />
          <WordMark />
        </a>

        <nav className="hidden md:flex items-center gap-7 font-medium text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className="text-ink/70 hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(`Oi! Encontrei o site da ${BUSINESS_NAME} e quero fazer um pedido.`)}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Falar no WhatsApp
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <Icon.x className="w-6 h-6" /> : <Icon.menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <nav className="flex flex-col px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="py-3 text-base font-medium text-ink/80 border-b border-ink/5 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
