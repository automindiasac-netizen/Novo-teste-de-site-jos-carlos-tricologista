import type { ReactNode } from "react";
import { Activity, Droplet, Lightbulb, ScanSearch, Sun, Syringe } from "lucide-react";

import { CardItem, ExpandingCards } from "@/components/ui/expanding-cards";
import { Badge } from "@/components/ui/badge";
import { procedures } from "@/content/site-data";

const icons: Record<string, ReactNode> = {
  tricoscopia: <ScanSearch size={24} />,
  microagulhamento: <Activity size={24} />,
  mesoterapia: <Syringe size={24} />,
  "led-azul": <Lightbulb size={24} />,
  "led-vermelho": <Sun size={24} />,
  oleoterapia: <Droplet size={24} />,
};

const items: CardItem[] = procedures.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  imgSrc: p.image,
  icon: icons[p.id],
}));

export function Procedures() {
  return (
    <section id="procedimentos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary" className="mx-auto">
            Procedimentos
          </Badge>
          <h2 className="mt-6 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Protocolos tricológicos personalizados
          </h2>
          <p className="mt-4 text-muted-foreground">
            Passe o mouse ou toque em cada card para conhecer os procedimentos
            realizados no consultório.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <ExpandingCards items={items} defaultActiveIndex={0} />
        </div>
      </div>
    </section>
  );
}
