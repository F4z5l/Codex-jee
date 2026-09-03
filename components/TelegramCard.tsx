import { Send } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export default function TelegramCard() {
  return (
    <section className="container max-w-6xl px-4 md:px-6">
      <div className="glass glass-hover flex flex-col items-start gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex items-start gap-4">
          <Logo size={48} />
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              {BRAND.name}
            </p>
            <p className="text-sm text-muted-foreground">@{BRAND.telegramHandle}</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Join the official {BRAND.name} Telegram channel for updates and
              study resources.
            </p>
          </div>
        </div>

        <a
          href={BRAND.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full shrink-0 md:w-auto"
        >
          <Button className="w-full bg-gradient-brand font-semibold text-black hover:opacity-90 md:w-auto">
            <Send className="mr-2 h-4 w-4" />
            Join Channel
          </Button>
        </a>
      </div>
    </section>
  );
}
