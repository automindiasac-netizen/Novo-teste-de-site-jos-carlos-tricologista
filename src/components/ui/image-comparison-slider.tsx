"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
  beforeLabel,
  afterLabel,
  className,
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));

      setSliderPosition(newPosition);
    },
    [isDragging],
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX);

  React.useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "glass relative aspect-[4/3] w-full max-w-4xl select-none overflow-hidden rounded-2xl sm:aspect-[16/10]",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={altAfter}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
        {afterLabel && (
          <span className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground">
            {afterLabel}
          </span>
        )}
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeImage}
        alt={altBefore}
        className="block h-full w-full object-cover object-center"
        draggable={false}
      />
      {beforeLabel && (
        <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white">
          {beforeLabel}
        </span>
      )}

      <div
        className="absolute top-0 bottom-0 flex w-1 cursor-ew-resize items-center justify-center bg-white/80"
        style={{ left: `calc(${sliderPosition}% - 0.125rem)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-200 ease-out",
            isDragging && "scale-110 shadow-xl",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-700"
          >
            <line x1="15" y1="18" x2="9" y2="12" />
            <line x1="9" y1="6" x2="15" y2="12" />
          </svg>
        </div>
      </div>
    </div>
  );
}
