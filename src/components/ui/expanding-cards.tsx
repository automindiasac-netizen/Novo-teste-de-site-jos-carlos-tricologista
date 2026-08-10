"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref?: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    defaultActiveIndex,
  );

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyle = React.useMemo((): React.CSSProperties => {
    if (activeIndex === null) return {};

    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items, isDesktop]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul
      className={cn(
        "grid w-full max-w-6xl gap-3",
        "h-[640px] md:h-[520px]",
        "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop
          ? { gridTemplateRows: "1fr" }
          : { gridTemplateColumns: "1fr" }),
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "glass group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-2xl md:min-w-[84px]",
          )}
          onMouseEnter={() => handleInteraction(index)}
          onFocus={() => handleInteraction(index)}
          onClick={() => handleInteraction(index)}
          tabIndex={0}
          data-active={activeIndex === index}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imgSrc}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition-all duration-300 ease-out group-data-[active=true]:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          <article className="absolute inset-0 flex flex-col justify-end gap-2 p-5">
            <h3 className="hidden origin-left rotate-90 text-sm font-medium tracking-wider text-white/80 uppercase opacity-100 transition-all duration-300 ease-out group-data-[active=true]:opacity-0 md:block">
              {item.title}
            </h3>

            <div className="text-primary opacity-0 transition-all duration-300 ease-out delay-75 group-data-[active=true]:opacity-100">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-white opacity-0 transition-all delay-150 duration-300 ease-out group-data-[active=true]:opacity-100">
              {item.title}
            </h3>

            <p className="w-full max-w-xs text-sm text-white/80 opacity-0 transition-all delay-225 duration-300 ease-out group-data-[active=true]:opacity-100">
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
