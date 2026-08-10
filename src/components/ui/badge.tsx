import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "label-caps inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-normal tracking-widest",
  {
    variants: {
      variant: {
        default: "glass border-foreground/10 text-foreground",
        primary: "border-primary/35 bg-primary/10 text-primary",
        accent: "border-foreground/15 bg-foreground/5 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
