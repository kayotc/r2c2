import React from "react";
import { WhatsAppIcon } from "./Icons.jsx";
import { BUSINESS_NAME } from "../data/content.js";
import { waLink } from "../lib/whatsapp.js";

// Barra fixa no rodapé, visível só no celular (prioridade mobile)
export default function WhatsAppBar() {
  return (
    <a
      href={waLink(`Oi! Encontrei o site da ${BUSINESS_NAME} e quero fazer um pedido.`)}
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand text-white font-semibold py-3.5 flex items-center justify-center gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
    >
      <WhatsAppIcon className="w-5 h-5" />
      Falar no WhatsApp
    </a>
  );
}
