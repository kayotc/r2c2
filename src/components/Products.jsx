import React from "react";
import Eyebrow from "./Eyebrow.jsx";
import { Icon } from "./Icons.jsx";
import { PRODUCTS, BUSINESS_NAME } from "../data/content.js";

export default function Products() {
  return (
    <section id="produtos" className="bg-white border-y border-ink/10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Eyebrow>PRODUTOS</Eyebrow>
        <h2 className="font-display font-bold text-2xl sm:text-3xl mt-3 max-w-md">
          O que dá pra imprimir com a gente
        </h2>
        <p className="mt-3 text-ink/60 max-w-lg">
          Alguns exemplos do que a {BUSINESS_NAME} produz. Não achou o que procura? Manda
          a ideia mesmo assim — provavelmente dá pra fazer.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PRODUCTS.map((p) => {
            const IconCmp = Icon[p.icon];
            return (
              <div
                key={p.title}
                className="group hover:-translate-y-2 transition-all  border border-ink/10 rounded-2xl p-5 sm:p-6 hover:border-brand/50 hover:shadow-sm transition-all bg-paper/60"
              >
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <IconCmp className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-display font-bold text-lg">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
