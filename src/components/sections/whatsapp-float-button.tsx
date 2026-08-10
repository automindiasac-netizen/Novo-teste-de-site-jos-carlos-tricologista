"use client";

import { MessageCircle } from "lucide-react";

import { getWhatsappUrl } from "@/lib/whatsapp";

export function WhatsappFloatButton() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-[#25d366]/30 transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-6" fill="currentColor" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40" />
    </a>
  );
}
