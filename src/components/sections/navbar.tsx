"use client";

import * as React from "react";
import { Menu, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, professional } from "@/content/site-data";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div
          className={cn(
            "glass flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          )}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
              JC
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-foreground sm:block">
              {professional.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-caps rounded-full px-3.5 py-2 text-xs tracking-wider text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="whatsapp" className="hidden sm:inline-flex">
              <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 sm:px-6 md:hidden">
          <div className="glass flex flex-col gap-1 rounded-2xl p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="label-caps rounded-xl px-4 py-3 text-sm tracking-wider text-foreground hover:bg-foreground/5"
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="whatsapp" className="mt-1">
              <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
