import React from "react";

// Ícone (cubo R2) — imagem real da logo, colocada em /public/logo-icon.png
// Para trocar por uma versão nova, basta substituir esse arquivo (mesmo nome)
// ou apontar o src abaixo para outro caminho dentro de /public.
export function LogoMark({ className = "w-10 h-10" }) {
  return (
    <img
      src="/logo-icon.png"
      alt="R2C2 3D"
      className={`${className} object-contain rounded-md`}
    />
  );
}

// Wordmark "R2C2 3D" — feito em texto/CSS (essa parte já está fiel ao original)
export function WordMark({ light = false, className = "" }) {
  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span className="font-display font-bold tracking-tight text-[1.6rem]">
        <span className={light ? "text-white" : "text-ink"}>R2</span>
        <span className="text-brand">C2</span>
      </span>
      <span
        className={`flex items-center gap-1.5 text-[0.65rem] mt-0.5 font-mono tracking-[0.25em] ${
          light ? "text-white/70" : "text-ink/60"
        }`}
      >
        <span className="w-3 h-px bg-current" />
        3D
        <span className="w-3 h-px bg-current" />
      </span>
    </div>
  );
}
