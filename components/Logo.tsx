"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  showWordmark?: boolean;
}

export default function Logo({ size = 36, className, showWordmark = false }: LogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {!failed ? (
        <Image
          src={BRAND.logoUrl}
          alt={`${BRAND.name} logo`}
          width={size}
          height={size}
          className="rounded-xl object-contain"
          onError={() => setFailed(true)}
          unoptimized
          priority
        />
      ) : (
        <div
          style={{ width: size, height: size }}
          className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--brand-accent))] to-[hsl(var(--brand-accent-2))] font-display font-bold text-black"
        >
          <span style={{ fontSize: size * 0.42 }}>CX</span>
        </div>
      )}
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          {BRAND.name}
        </span>
      )}
    </div>
  );
}
