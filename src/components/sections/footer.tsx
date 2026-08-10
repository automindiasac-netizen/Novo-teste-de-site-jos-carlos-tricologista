import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { InstagramIcon } from "@/components/icons/instagram-icon";
import { navLinks, professional, socials } from "@/content/site-data";
import { getWhatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="relative border-t border-border pt-16 pb-8">
      <div className="mesh-glow pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                JC
              </span>
              <span className="text-sm font-semibold text-foreground">
                {professional.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {professional.role} dedicado ao diagnóstico e tratamento de
              condições capilares, com atendimento humanizado e baseado em
              evidência científica.
            </p>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
            >
              <MessageCircle className="size-4 text-whatsapp" />
              Falar no WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                {professional.phoneDisplay}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="break-all">{professional.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {professional.location.neighborhoodCity}
              </li>
              <li>
                <a
                  href={professional.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <InstagramIcon className="size-4 text-primary" />
                  {professional.instagramHandle}
                </a>
              </li>
              {socials
                .filter((s) => s.label !== "Instagram")
                .map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {professional.name}. Todos os direitos reservados.
          </p>
          <p>{professional.crbm}</p>
        </div>
      </div>
    </footer>
  );
}
