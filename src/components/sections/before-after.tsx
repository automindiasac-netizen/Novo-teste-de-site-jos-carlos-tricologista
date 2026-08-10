import { ArrowLeftRight } from "lucide-react";

import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { Badge } from "@/components/ui/badge";

export function BeforeAfter() {
  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="accent" className="mx-auto">
            <ArrowLeftRight className="size-3.5" />
            Resultados reais
          </Badge>
          <h2 className="mt-6 text-balance font-display text-3xl font-normal tracking-tight text-foreground italic sm:text-4xl">
            Evolução acompanhada de perto, do diagnóstico ao resultado
          </h2>
          <p className="mt-4 text-muted-foreground">
            Arraste o controle para comparar o couro cabeludo antes e depois do
            protocolo de tratamento capilar.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <ImageComparison
            beforeImage="/images/scalp-before.svg"
            afterImage="/images/scalp-after.svg"
            altBefore="Couro cabeludo antes do tratamento capilar"
            altAfter="Couro cabeludo depois do tratamento capilar"
            beforeLabel="Antes"
            afterLabel="Depois"
          />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Imagens meramente ilustrativas. Resultados variam de acordo com cada
          paciente e diagnóstico individual.
        </p>
      </div>
    </section>
  );
}
