import { professional } from "@/content/site-data";

export function getWhatsappUrl(message: string = professional.whatsappMessage) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${professional.whatsappNumber}?${params.toString()}`;
}
