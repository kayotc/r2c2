import React from "react";
import Eyebrow from "./Eyebrow.jsx";
import StatCard from "./StatCard.jsx";
import { BUSINESS_NAME, OWNER_NAME } from "../data/content.js";

export default function About() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-16">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <Eyebrow>SOBRE</Eyebrow>
          <h2 className="font-display font-bold text-2xl sm:text-3xl mt-3">
            Cada peça, pensada nos detalhes
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            A {BUSINESS_NAME} é o ateliê de impressão 3D de {OWNER_NAME}. Cada pedido é
            tratado como um projeto: a peça certa, no material certo, com acabamento
            cuidadoso — sempre combinada diretamente com você, sem burocracia.
          </p>
          <p className="mt-3 text-ink/70 leading-relaxed">
            Tem uma ideia, uma referência de imagem ou aquela peça que quebrou e não se
            encontra mais? Manda uma mensagem e vamos ver como imprimir.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <StatCard label="Camada mínima" value="0.1mm" />
          <StatCard label="Materiais" value="PLA · PETG · ABS" small />
          <StatCard label="Atendimento" value="Direto no WhatsApp" small />
          <StatCard label="Peças" value="100% sob encomenda" small />
        </div>
      </div>
    </section>
  );
}
