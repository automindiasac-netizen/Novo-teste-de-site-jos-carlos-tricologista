import { GraduationCap, HeartPulse, Microscope, UserCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { professional } from "@/content/site-data";

const pillars = [
  {
    icon: Microscope,
    title: "Diagnóstico preciso",
    text: "Avaliação tricoscópica detalhada antes de qualquer indicação de tratamento.",
  },
  {
    icon: UserCheck,
    title: "Cuidado individualizado",
    text: "Protocolos desenhados para o histórico e as necessidades de cada paciente.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento contínuo",
    text: "Reavaliações periódicas para ajustar o tratamento conforme a evolução.",
  },
  {
    icon: GraduationCap,
    title: "Base científica",
    text: "Condutas fundamentadas em evidência científica e boas práticas da Tricologia.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mesh-glow pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Badge variant="primary">Sobre o profissional</Badge>
          <h2 className="mt-6 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {professional.name}
          </h2>
          <p className="mt-1 text-muted-foreground">{professional.role} · {professional.crbm}</p>

          <div className="mt-8 space-y-4 text-muted-foreground">
            {professional.longBio
              .filter((p) => !p.startsWith("// TODO"))
              .map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass rounded-2xl p-6">
              <pillar.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
