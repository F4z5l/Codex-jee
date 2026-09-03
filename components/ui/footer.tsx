import { Send } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="container max-w-6xl px-4 py-10 md:px-6">
      <div className="glass flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex items-start gap-3">
          <Logo size={36} />
          <div>
            <p className="font-display font-bold text-foreground">{BRAND.name}</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Premium study resources, tools and educational platforms — all
              in one place.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              This site is made for personal use only. It isn&apos;t
              monetized.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <a href={BRAND.telegramUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-brand font-semibold text-black hover:opacity-90">
              <Send className="mr-2 h-4 w-4" />
              Join @{BRAND.telegramHandle}
            </Button>
          </a>
          <p className="text-xs text-muted-foreground">
            Created &amp; maintained by {BRAND.owner}
          </p>
        </div>
      </div>
    </footer>
  );
}
