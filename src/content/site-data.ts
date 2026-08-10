/**
 * Conteúdo central do site.
 *
 * IMPORTANTE: Não foi possível acessar a pasta do Google Drive nem o perfil do
 * Instagram informados (bloqueados neste ambiente de execução), então os campos
 * marcados com "// TODO" abaixo usam valores de exemplo e devem ser
 * conferidos/substituídos antes de publicar o site. Veja NOTES.md na raiz do
 * projeto para a lista completa.
 */

export const professional = {
  name: "Dr. José Carlos Fontenele",
  role: "Biomédico Tricologista",
  crbm: "CRBM [inserir número de registro]", // TODO: confirmar número do CRBM
  tagline: "Cuidado especializado para a saúde do seu couro cabeludo e cabelo",
  shortBio:
    "Biomédico especialista em Tricologia, dedicado a diagnosticar e tratar queda de cabelo, calvície e demais condições do couro cabeludo com métodos baseados em evidência e acompanhamento próximo de cada paciente.",
  longBio: [
    "Com atuação focada em saúde capilar, o Dr. José Carlos Fontenele une avaliação clínica detalhada, tecnologia de tricoscopia digital e protocolos personalizados para tratar alopecia, queda capilar, oleosidade excessiva, caspa e outras condições do couro cabeludo.",
    "O atendimento começa sempre por um diagnóstico preciso: histórico de saúde, exame tricoscópico e, quando necessário, encaminhamento para exames complementares. A partir disso, é desenhado um plano terapêutico individualizado, com metas claras e reavaliações periódicas para acompanhar a evolução de cada paciente.",
    "// TODO: substituir por formação acadêmica, cursos de especialização, tempo de experiência e certificações reais extraídas do portfólio/PDF do profissional.",
  ],
  instagramHandle: "@drjosecarlosfontenele",
  instagramUrl: "https://www.instagram.com/drjosecarlosfontenele/",
  whatsappNumber: "5585999999999", // TODO: confirmar número de WhatsApp (formato internacional, apenas dígitos)
  whatsappMessage:
    "Olá, Dr. José Carlos! Gostaria de agendar uma avaliação capilar.",
  phoneDisplay: "(85) 99999-9999", // TODO: confirmar telefone de contato
  email: "contato@drjosecarlosfontenele.com.br", // TODO: confirmar e-mail
  location: {
    clinicName: "Clínica de Tricologia Dr. José Carlos Fontenele", // TODO: confirmar nome da clínica
    addressLine: "Av. Exemplo, 1234 - Sala 101", // TODO: confirmar endereço
    neighborhoodCity: "Meireles, Fortaleza - CE", // TODO: confirmar bairro/cidade
    cep: "60000-000", // TODO: confirmar CEP
    mapsUrl: "https://maps.google.com/?q=Fortaleza,+CE", // TODO: link real do Google Maps
    coordinates: "3.7319° S, 38.5267° O", // TODO: coordenadas reais do consultório
    hours: [
      { day: "Segunda a Sexta", time: "08h às 18h" },
      { day: "Sábado", time: "08h às 12h" },
    ],
  },
} as const;

export const stats = [
  { value: "+1000", label: "Pacientes atendidos" }, // TODO: confirmar número real
  { value: "+8", label: "Anos de experiência" }, // TODO: confirmar tempo de experiência
  { value: "95%", label: "Satisfação nos atendimentos" }, // TODO: confirmar indicador real
] as const;

export const procedures = [
  {
    id: "tricoscopia",
    title: "Tricoscopia Digital",
    description:
      "Avaliação minuciosa do couro cabeludo e dos fios com tricoscópio digital, permitindo diagnóstico preciso da causa da queda capilar.",
    image: "/images/procedure-tricoscopia.svg",
  },
  {
    id: "mesoterapia",
    title: "Mesoterapia Capilar",
    description:
      "Microinjeções de ativos direcionados ao couro cabeludo para estimular o crescimento e fortalecer os fios enfraquecidos.",
    image: "/images/procedure-mesoterapia.svg",
  },
  {
    id: "microagulhamento",
    title: "Microagulhamento Capilar",
    description:
      "Técnica que estimula a produção natural de colágeno e a absorção de ativos, potencializando os resultados do tratamento.",
    image: "/images/procedure-microagulhamento.svg",
  },
  {
    id: "laserterapia",
    title: "Laserterapia Capilar",
    description:
      "Terapia a laser de baixa intensidade (LLLT) que estimula a microcirculação do couro cabeludo e a atividade folicular.",
    image: "/images/procedure-laserterapia.svg",
  },
  {
    id: "prp",
    title: "PRP Capilar",
    description:
      "Uso de plasma rico em plaquetas para estimular fatores de crescimento naturais e favorecer o fortalecimento capilar.",
    image: "/images/procedure-prp.svg",
  },
  {
    id: "consultoria",
    title: "Consultoria Capilar",
    description:
      "Plano de cuidados home-care personalizado, com indicação de produtos e rotina adequada ao seu tipo de couro cabeludo.",
    image: "/images/procedure-consultoria.svg",
  },
] as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#resultados", label: "Resultados" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
] as const;

export const socials = [
  {
    label: "Instagram",
    href: professional.instagramUrl,
  },
  // TODO: adicionar demais redes sociais reais (Facebook, TikTok, YouTube etc.)
] as const;
