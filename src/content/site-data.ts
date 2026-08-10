/**
 * Conteúdo central do site.
 *
 * Textos e fotos dos procedimentos vêm do material (PDF) enviado pelo
 * profissional. Não foi possível acessar a pasta do Google Drive nem o
 * perfil do Instagram (bloqueados neste ambiente de execução), então os
 * campos marcados com "// TODO" abaixo (contato, endereço, CRBM) ainda
 * usam valores de exemplo e devem ser conferidos antes de publicar. Veja
 * NOTES.md na raiz do projeto para a lista completa.
 */

export const professional = {
  name: "Dr. José Carlos Fontenele",
  role: "Tricologista | Biomédico Esteta",
  crbm: "CRBM [inserir número de registro]", // TODO: confirmar número do CRBM
  tagline: "Resgate sua autoestima através da saúde capilar",
  shortBio:
    "Biomédico especialista em Tricologia, dedicado a restaurar a saúde capilar e a autoestima por meio de um acompanhamento individualizado, estratégico e baseado em evidências.",
  longBio: [
    "Com formação em Fisioterapia e Biomedicina, além de mestrado e especializações em Estética, Anatomia e Saúde Pública, o Dr. José Carlos sempre teve forte paixão pelo ensino de Anatomia Humana — área na qual atua até hoje em uma faculdade de Medicina.",
    "Paralelamente à docência, a prática clínica e a ciência sempre foram grandes pilares da sua trajetória profissional. Foi na especialização em tricologia que encontrou seu propósito: unir ciência e educação para transformar vidas.",
    "Mais do que tratar os cabelos, ele ajuda a restaurar a saúde capilar e a autoestima por meio de um acompanhamento individualizado, estratégico e baseado em evidências.",
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
  { value: "Fisioterapia & Biomedicina", label: "Formação de base" },
  { value: "Mestrado", label: "Estética, Anatomia e Saúde Pública" },
  { value: "Docente", label: "Anatomia Humana em faculdade de Medicina" },
] as const;

export const procedures = [
  {
    id: "tricoscopia",
    title: "Tricoscopia",
    description:
      "O exame que permite enxergar o que está por trás da sua queixa, muitas vezes invisível a olho nu — direcionando um diagnóstico mais assertivo e um tratamento realmente individualizado.",
    image: "/images/procedure-tricoscopia.jpg",
  },
  {
    id: "microagulhamento",
    title: "Microagulhamento Capilar",
    description:
      "Técnica que utiliza microperfurações controladas no couro cabeludo para estimular a regeneração tecidual, aumentar a circulação local e potencializar a absorção de ativos.",
    image: "/images/procedure-microagulhamento.jpg",
  },
  {
    id: "mesoterapia",
    title: "Mesoterapia",
    description:
      "Aplicação de ativos diretamente no couro cabeludo, permitindo uma ação mais direcionada, com foco em modular inflamação, nutrir os folículos e estimular o crescimento dos fios.",
    image: "/images/procedure-mesoterapia.jpg",
  },
  {
    id: "led-azul",
    title: "LED Azul",
    description:
      "Tecnologia segura e não invasiva, com ação principalmente antimicrobiana. Auxilia no controle de alterações do couro cabeludo relacionadas à oleosidade excessiva e desequilíbrio microbiológico.",
    image: "/images/procedure-led-azul.jpg",
  },
  {
    id: "led-vermelho",
    title: "LED Vermelho/Infravermelho",
    description:
      "Fotobiomodulação que atua na bioestimulação celular, aumentando a atividade metabólica dos folículos, melhorando a microcirculação e favorecendo a fase de crescimento dos fios.",
    image: "/images/procedure-led-vermelho.jpg",
  },
  {
    id: "oleoterapia",
    title: "Oleoterapia Capilar",
    description:
      "Utilização de óleos específicos com propriedades nutritivas, anti-inflamatórias e restauradoras, para equilibrar o couro cabeludo, melhorar a barreira cutânea e a saúde global dos fios.",
    image: "/images/procedure-oleoterapia.jpg",
  },
] as const;

export const methodology = [
  {
    step: "01",
    title: "Anamnese",
    text:
      "A primeira consulta é a etapa mais importante da tricologia: o primeiro contato com o paciente, de forma calma, sem pressa e com atenção total aos detalhes — essencial para identificar as possíveis causas da queda capilar.",
  },
  {
    step: "02",
    title: "Tricoscopia",
    text:
      "Junto com a anamnese, o exame tricoscópico permite compreender de forma precisa o que está acontecendo com o couro cabeludo e os fios, direcionando um diagnóstico mais assertivo.",
  },
  {
    step: "03",
    title: "Protocolo individualizado",
    text:
      "Seu protocolo capilar é desenvolvido de forma totalmente individualizada e compartilhado com você para aprovação — construído com base na ciência, respeitando sua realidade e seus objetivos.",
  },
  {
    step: "04",
    title: "Home care",
    text:
      "Uma das etapas mais importantes do tratamento: ativos individualizados, shampoos e tônicos personalizados que mantêm o couro cabeludo em equilíbrio fora do consultório.",
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
