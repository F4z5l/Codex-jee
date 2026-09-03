import { ArrowRight, Send, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { BRAND } from "@/lib/brand";
import { examStats } from "@/lib/examInfo";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle floating gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand-accent)/0.18)] blur-[110px] motion-safe:animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[360px] w-[360px] rounded-full bg-[hsl(var(--brand-accent-2)/0.14)] blur-[110px]"
      />

      <div className="container relative max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="motion-safe:animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-accent))]" />
              Premium study ecosystem
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl">
              All study resources.
              <br />
              <span className="text-gradient-brand">One place.</span>
            </h1>

            <p className="mt-5 max-w-[52ch] text-base text-muted-foreground md:text-lg">
              Notes, PYQs, mock tests, study tools and educational resources —
              organized for students, and free to use.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#jee-mains">
                <Button
                  size="lg"
                  className="bg-gradient-brand font-semibold text-black hover:opacity-90"
                >
                  Explore Study Hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={BRAND.telegramUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="glass border-white/15">
                  <Send className="mr-2 h-4 w-4" />
                  Join Telegram
                </Button>
              </a>
            </div>
          </div>

          {/* Right: floating brand / live stats card */}
          <div className="motion-safe:animate-fade-up [animation-delay:150ms]">
            <div className="glass glass-hover rounded-2xl p-6 shadow-2xl md:p-8">
              <div className="flex items-center justify-between">
                <Logo size={44} />
                <span className="motion-safe:animate-float text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {BRAND.name}
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <StatTile
                  icon={<FileText className="h-4 w-4" />}
                  value={examStats.totalPapers}
                  label="Practice papers"
                />
                <StatTile
                  icon={<GraduationCap className="h-4 w-4" />}
                  value={examStats.examsCovered}
                  label="Exams covered"
                />
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
                Free to use — built for personal study, not monetized.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-2 text-[hsl(var(--brand-accent))]">
        {icon}
      </div>
      <div className="mt-2 font-display text-2xl font-bold text-foreground">
        {value}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
