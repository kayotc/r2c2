# R2C2 3D — site vitrine

Site institucional (não é loja online) em React + Tailwind. Cada botão de
pedido redireciona para o WhatsApp, com uma mensagem já preenchida.

## Como rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

Para gerar a versão de produção (arquivos estáticos prontos para publicar):

```bash
npm run build
```

Os arquivos finais ficam em `dist/`.

## Estrutura

```
src/
  main.jsx              -> ponto de entrada
  App.jsx                -> monta a página juntando as seções
  index.css               -> Tailwind
  data/content.js          -> TODOS os textos e listas (produtos, passos, materiais, nome, WhatsApp)
  lib/whatsapp.js           -> número do WhatsApp e helper de link
  components/
    Logo.jsx                -> ícone (imagem) + wordmark "R2C2 3D"
    Icons.jsx                 -> ícones usados nos cards
    Header.jsx                  -> menu fixo no topo
    Hero.jsx                     -> topo da página
    About.jsx                     -> seção "Sobre"
    Products.jsx                   -> grade de produtos
    HowItWorks.jsx                   -> "Como funciona" (4 passos)
    Materials.jsx                     -> materiais (PLA/PETG/ABS/Resina)
    Footer.jsx                         -> rodapé / contato
    WhatsAppBar.jsx                     -> barra fixa no celular
public/
  logo-icon.png            -> ícone da logo (o cubo R2)
```

## Editar o conteúdo

Praticamente tudo o que é texto está em `src/data/content.js`:
nome do negócio, produtos, passos do "como funciona", materiais etc.

## Trocar o número de WhatsApp

Abra `src/lib/whatsapp.js` e troque:

```js
export const WHATSAPP_NUMBER = "5581999999999";
```

Formato: DDI + DDD + número, só dígitos (ex: 55 81 99999-9999 vira "5581999999999").

## Trocar a logo

O ícone (cubo) já está usando a imagem real que você enviou, em
`public/logo-icon.png`. Se quiser trocar por uma versão nova/oficial:

1. Salve o novo arquivo em `public/` (ex: `public/logo-icon.png`, pode
   sobrescrever o mesmo nome, ou usar outro nome).
2. Se usar outro nome de arquivo, abra `src/components/Logo.jsx` e troque
   o `src="/logo-icon.png"` pelo caminho novo.

O texto "R2C2 3D" ao lado do ícone é gerado em CSS (não é imagem), também em
`src/components/Logo.jsx`, caso queira ajustar a tipografia ou as cores.

## Publicar

Depois do `npm run build`, o conteúdo de `dist/` pode ser publicado em
qualquer hospedagem de site estático (Vercel, Netlify, GitHub Pages, etc.).
