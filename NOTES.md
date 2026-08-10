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
- WhatsApp: `(88) 99644-7060` (confirmado pelo profissional).
- Instagram: [@drjosecarlosfontenele](https://www.instagram.com/drjosecarlosfontenele/)
  (confirmado pelo profissional).
- Fotos reais de antes/depois na seção "Resultados"
  (`public/images/scalp-before.jpg` / `scalp-after.jpg`), enviadas pelo
  profissional como anexo diretamente no repositório.

## O que ainda é placeholder

O PDF não trazia número de CRBM, e-mail ou endereço. Também não foi possível
acessar a pasta do Google Drive (bloqueada neste ambiente), então esses
dados continuam como exemplo em `src/content/site-data.ts`, marcados com
`// TODO`:

- Número de registro no CRBM.
- E-mail de contato.
- Endereço completo, bairro/cidade, CEP e link do Google Maps.
- Redes sociais adicionais além do Instagram.

### Foto do Hero
Foi enviada uma foto de referência para o Hero (blazer verde-oliva, fundo
transparente) diretamente colada no chat, mas este ambiente remoto não
consegue salvar em disco imagens coladas inline (apenas arquivos enviados
como anexo/upload ficam acessíveis — foi assim que as fotos de antes/depois
e o PDF chegaram). A foto usada hoje em `public/images/hero-portrait.jpg` é
a mesma pose/sessão extraída do PDF (variante de blazer preto). Para usar
exatamente a foto do blazer verde, envie-a como **anexo de arquivo** (não
colada no corpo da mensagem) e troque `public/images/hero-portrait.jpg`.

## Domínio
`src/app/layout.tsx`, `src/app/sitemap.ts` e `src/app/robots.ts` usam um
domínio de exemplo (`https://www.drjosecarlosfontenele.com.br`) — atualize
para o domínio real antes de publicar.

## Identidade visual

Paleta e tipografia definidas a pedido do profissional (ecoando o próprio
PDF/portfólio):

- Cores (`src/app/globals.css`): `#141310` preto quente (texto), `#FBF9F5`
  papel (fundo), `#EDE6D9` nude (superfícies), `#8A8172` cinza-pedra (texto
  secundário), `#A9803F` dourado (accent/primary).
- Tipografia (`src/app/layout.tsx`): Playfair Display itálico para títulos
  editoriais (Hero, nome do profissional, headlines de seção), Bebas Neue
  para rótulos/seções em caixa alta (badges, nav, títulos de procedimentos,
  cards), Montserrat para o corpo do texto.
- Estilo "liquid glass": painéis translúcidos com `backdrop-filter: blur()`
  em tom claro (`.glass`) sobre o fundo papel, com uma variante escura
  (`.glass-dark`) para legendas sobre fotos.

## Stack utilizada
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
- Estrutura de componentes no padrão shadcn (`components.json`,
  `src/components/ui`, `src/lib/utils.ts` com `cn()`).
- `lucide-react` para ícones e `framer-motion` para as animações do card de
  localização.
- Dados estruturados JSON-LD (`MedicalBusiness`/`Physician`), `sitemap.xml` e
  `robots.txt` para SEO básico.

## Como rodar
```bash
npm install
npm run dev
```

## Publicar no GitHub Pages

O site foi configurado para exportação estática (`output: "export"` em
`next.config.ts`) — não depende de servidor, funciona 100% em GitHub Pages.

**Opção recomendada — automático (`.github/workflows/deploy-pages.yml`):**
1. No repositório, vá em **Settings → Pages**.
2. Em "Source", selecione **GitHub Actions**.
3. Pronto. Todo push na branch `claude/trichologist-website-design-59v7sm`
   já dispara o workflow, que builda e publica sozinho. Você pode acompanhar
   em **Actions**. O site fica em:
   `https://automindiasac-netizen.github.io/Novo-teste-de-site-jos-carlos-tricologista/`

**Opção manual (arquivo já pronto):** se preferir não usar Actions, gere o
build localmente e suba o resultado:
```bash
npm run build:gh-pages   # gera a pasta out/
```
Depois publique o conteúdo da pasta `out/` na branch `gh-pages` (ou em
Settings → Pages → "Deploy from a branch"). Um `.zip` desse build também foi
enviado nesta conversa para conferência/backup.

Se o nome do repositório mudar, atualize `repoName` em `next.config.ts`, o
script `build:gh-pages` no `package.json` e a branch no workflow.
