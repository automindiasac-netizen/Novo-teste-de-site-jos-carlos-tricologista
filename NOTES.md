# Notas antes de publicar

Este projeto foi criado a partir do pedido de site para o Dr. José Carlos
Fontenele (Tricologista | Biomédico Esteta).

## O que já é conteúdo real

O PDF de portfólio enviado (`ATENDIMENTOJOSÉCARLOS`) foi lido e usado como
fonte oficial de conteúdo e imagens. Já são reais/extraídos do material dele:

- Foto do profissional no Hero (`public/images/hero-portrait.jpg`) — cutout
  original do PDF, recomposto sobre um fundo em gradiente na paleta do site.
- Fotos dos 6 procedimentos (`public/images/procedure-*.jpg`): Tricoscopia,
  Microagulhamento Capilar, Mesoterapia, LED Azul, LED Vermelho/Infravermelho
  e Oleoterapia Capilar — todas fotos reais extraídas do PDF.
- Textos da seção "Sobre" (biografia) e dos 4 passos de "Como funciona o
  atendimento" (Anamnese, Tricoscopia, Protocolo individualizado, Home care)
  — extraídos/adaptados do texto original do PDF.
- Descrições dos 6 procedimentos — extraídas do texto original do PDF.
- Título profissional "Tricologista | Biomédico Esteta" (conforme a arte do
  PDF).

## O que ainda é placeholder

O PDF não trazia número de CRBM, telefone, e-mail, endereço ou link de
WhatsApp/Maps (os botões "AGENDA" e "INSTAGRAM" da arte não tinham link
clicável embutido no PDF). Também não foi possível acessar a pasta do Google
Drive nem o Instagram (bloqueados neste ambiente), então esses dados
continuam como exemplo em `src/content/site-data.ts`, marcados com
`// TODO`:

- Número de registro no CRBM.
- Número de WhatsApp (`whatsappNumber`, formato internacional só com dígitos).
- Telefone de exibição e e-mail de contato.
- Endereço completo, bairro/cidade, CEP e link do Google Maps.
- Redes sociais adicionais além do Instagram.

### Seção "Resultados" (antes/depois)
As duas fotos de couro cabeludo (antes/depois) que você colou diretamente no
chat no início da conversa não puderam ser salvas em disco por este ambiente
remoto, e não estavam neste PDF. `public/images/scalp-before.svg` e
`scalp-after.svg` continuam sendo ilustrações genéricas — troque pelos
arquivos reais em `src/components/sections/before-after.tsx` (`beforeImage`/
`afterImage`) antes de publicar, já que é a única seção com imagens de
exemplo hoje.

## Domínio
`src/app/layout.tsx`, `src/app/sitemap.ts` e `src/app/robots.ts` usam um
domínio de exemplo (`https://www.drjosecarlosfontenele.com.br`) — atualize
para o domínio real antes de publicar.

## Stack utilizada
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
- Estrutura de componentes no padrão shadcn (`components.json`,
  `src/components/ui`, `src/lib/utils.ts` com `cn()`).
- `lucide-react` para ícones e `framer-motion` para as animações do card de
  localização.
- Estilo "liquid glass": painéis translúcidos com `backdrop-filter: blur()`
  (classes utilitárias `.glass` e `.glass-light` em `globals.css`).
- Dados estruturados JSON-LD (`MedicalBusiness`/`Physician`), `sitemap.xml` e
  `robots.txt` para SEO básico.

## Como rodar
```bash
npm install
npm run dev
```
