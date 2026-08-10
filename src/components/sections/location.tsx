import { Clock, MapPin, Navigation } from "lucide-react";

import { LocationMap } from "@/components/ui/expand-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { professional } from "@/content/site-data";

export function Location() {
  const { location } = professional;

  return (
    <section id="localizacao" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="accent">
              <MapPin className="size-3.5" />
              Onde atendemos
            </Badge>
            <h2 className="mt-6 text-balance font-display text-3xl font-normal tracking-tight text-foreground italic sm:text-4xl">
              {location.clinicName}
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-foreground">{location.addressLine}</p>
                  <p className="text-muted-foreground">
                    {location.neighborhoodCity} · CEP {location.cep}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="space-y-1">
                  {location.hours.map((h) => (
                    <p key={h.day} className="text-muted-foreground">
                      <span className="text-foreground">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild size="lg" variant="glass" className="mt-8">
              <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="size-4" />
                Traçar rota até o consultório
              </a>
            </Button>
          </div>

          <div className="flex justify-center py-6 lg:justify-end">
            <LocationMap
              location={location.neighborhoodCity}
              coordinates={location.coordinates}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
