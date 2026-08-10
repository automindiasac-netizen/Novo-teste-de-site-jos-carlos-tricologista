# Dr. José Carlos Fontenele — Site de Tricologia

Site institucional para o Dr. José Carlos Fontenele, Biomédico Tricologista,
construído com Next.js (App Router), TypeScript e Tailwind CSS, em um
estilo minimalista com efeito "liquid glass" (glassmorphism).

> Antes de publicar, leia [NOTES.md](./NOTES.md) — há placeholders de imagens
> e informações de contato que precisam ser confirmados/substituídos.

## Seções

- **Hero**: foto do profissional, CTA para WhatsApp e principais informações.
- **Resultados**: slider de comparação antes/depois (`ImageComparison`).
- **Procedimentos**: cards expansíveis com os principais procedimentos.
- **Sobre**: biografia e diferenciais do atendimento.
- **Localização**: endereço, horários e mapa interativo (`LocationMap`).
- **Rodapé**: contato, redes sociais e navegação.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Estrutura de componentes no padrão [shadcn/ui](https://ui.shadcn.com)
  (`components.json`, `src/components/ui`, `cn()` em `src/lib/utils.ts`)
- [lucide-react](https://lucide.dev) para ícones
- [framer-motion](https://www.framer.com/motion/) para as animações do mapa

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Build de produção

```bash
npm run build
npm run start
```
