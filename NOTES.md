# Notas antes de publicar

Este projeto foi criado a partir do pedido de site para o Dr. José Carlos
Fontenele (Biomédico Tricologista). Durante o desenvolvimento, o ambiente de
execução **bloqueou o acesso** aos seguintes links enviados na solicitação:

- Pasta do Google Drive com o portfólio/PDF do profissional.
- Perfil do Instagram [@drjosecarlosfontenele](https://www.instagram.com/drjosecarlosfontenele/).

Também não foi possível salvar em disco as 3 imagens anexadas na conversa
(foto do profissional + fotos "antes/depois" do couro cabeludo) — este
ambiente remoto não gravou os arquivos enviados por upload.

Por isso, o site foi construído com **placeholders claramente identificados**,
que precisam ser substituídos antes de publicar:

## Imagens (pasta `public/images/`)
- `hero-portrait.svg` → substituir pela foto real do profissional (a primeira
  imagem enviada na conversa).
- `scalp-before.svg` → substituir pela foto "antes" (a segunda imagem
  enviada).
- `scalp-after.svg` → substituir pela foto "depois" (a terceira imagem
  enviada).
- `procedure-*.svg` → são artes abstratas geradas para os cards de
  procedimentos; podem ser trocadas por fotos reais do consultório/equipamentos
  se desejar.

Ao trocar por fotos reais (JPG/PNG), atualize os `src` correspondentes em:
- `src/components/sections/hero.tsx`
- `src/components/sections/before-after.tsx`

## Dados de contato e conteúdo (`src/content/site-data.ts`)
Todos os campos marcados com `// TODO` precisam de confirmação:
- Número de registro no CRBM.
- Número de WhatsApp (`whatsappNumber`, formato internacional só com dígitos).
- Telefone de exibição e e-mail de contato.
- Endereço completo, bairro/cidade, CEP e link do Google Maps.
- Estatísticas da Hero (pacientes atendidos, anos de experiência, satisfação).
- Formação acadêmica, especializações e tempo de experiência reais (usados na
  seção "Sobre").
- Redes sociais adicionais (além do Instagram).

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
