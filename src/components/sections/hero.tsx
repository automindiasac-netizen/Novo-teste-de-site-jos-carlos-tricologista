import { CalendarCheck, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { professional, stats } from "@/content/site-data";
import { assetPath } from "@/lib/paths";
import { getWhatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mesh-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <Badge variant="primary">
            <Sparkles className="size-3.5" />
            Biomedicina especializada em Tricologia
          </Badge>

          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.1] font-normal tracking-tight text-foreground italic sm:text-5xl lg:text-6xl">
            {professional.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {professional.shortBio}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp">
              <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Agendar avaliação pelo WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#sobre">Conhecer o tratamento</a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3 sm:max-w-xl">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-lg font-semibold text-foreground">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              {professional.crbm}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {professional.location.neighborhoodCity}
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck className="size-4 text-primary" />
              Agenda com horários flexíveis
            </span>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="animate-float-slow glass relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/images/hero-portrait.jpg")}
              alt={`Foto de ${professional.name}, ${professional.role}`}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="glass-dark absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">{professional.name}</p>
                <p className="text-xs text-white/65">{professional.role}</p>
              </div>
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(169,128,63,0.6)]" />
            </div>
          </div>

          <div className="glass absolute -top-5 -right-5 hidden rounded-2xl px-4 py-3 sm:block">
            <p className="label-caps text-[0.65rem] text-muted-foreground">Diagnóstico com</p>
            <p className="text-sm font-semibold text-foreground">Tricoscopia Digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}
