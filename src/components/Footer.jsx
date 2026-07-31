import React from "react";
import { LogoMark, WordMark } from "./Logo.jsx";
import { WhatsAppIcon, Icon } from "./Icons.jsx";
import { BUSINESS_NAME, OWNER_NAME, INSTAGRAM_URL } from "../data/content.js";
import { waLink } from "../lib/whatsapp.js";

export default function Footer() {
  return (
    <footer id="contato" className="bg-paper border-t border-ink/10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-2">
            <LogoMark className="w-8 h-8" />
            <WordMark />
          </div>
          <div className="flex items-center gap-4">
            <a
              href={waLink(`Oi! Encontrei o site da ${BUSINESS_NAME} e quero fazer um pedido.`)}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 hover:text-brand hover:border-brand transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 hover:text-brand hover:border-brand transition-colors"
              aria-label="Instagram"
            >
              <Icon.instagram className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink/50 font-mono">
          <span>
            © {new Date().getFullYear()} {BUSINESS_NAME} — {OWNER_NAME}
          </span>
          <span>impressão 3d sob encomenda</span>
        </div>
      </div>
    </footer>
  );
}
