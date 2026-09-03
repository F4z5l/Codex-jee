"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "JEE Mains", href: "#jee-mains" },
  { label: "Other Exams", href: "#other-exams" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-x-0 border-t-0 border-b border-white/10">
        <div className="container flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="#top" className="shrink-0">
            <Logo size={32} showWordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <a href={BRAND.telegramUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-brand font-semibold text-black hover:opacity-90"
              >
                Join Telegram
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
