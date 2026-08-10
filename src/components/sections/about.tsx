import { methodology, professional } from "@/content/site-data";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mesh-glow pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Badge variant="primary">Sobre o profissional</Badge>
          <h2 className="mt-6 text-balance font-display text-3xl font-normal tracking-tight text-foreground italic sm:text-4xl">
            {professional.name}
          </h2>
          <p className="label-caps mt-2 text-xs text-muted-foreground">{professional.role} · {professional.crbm}</p>

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

        <div>
          <p className="label-caps text-sm text-muted-foreground">
            Como funciona o atendimento
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {methodology.map((step) => (
              <div key={step.step} className="glass rounded-2xl p-6">
                <span className="font-display text-2xl font-semibold text-primary">
                  {step.step}
                </span>
                <h3 className="label-caps mt-3 text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
