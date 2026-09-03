import { CornerDownRight, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

interface ExamCardProps extends CardProps {
  Title: string;
  RedirectValue: string;
  Day: boolean;
}

export default function ExamCard({
  className,
  Title,
  RedirectValue,
  Day,
  ...props
}: ExamCardProps) {
  return (
    <Card
      className={cn(
        "glass glass-hover flex flex-col justify-between border-white/10 bg-white/[0.03] p-2",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-display text-lg leading-snug text-foreground">
            {Title}
          </CardTitle>
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
              Day
                ? "bg-[hsl(var(--brand-accent)/0.15)] text-[hsl(var(--brand-accent))]"
                : "bg-[hsl(var(--brand-accent-2)/0.15)] text-[hsl(var(--brand-accent-2))]"
            )}
          >
            {Day ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </div>
        </div>
        <Badge
          variant="outline"
          className="mt-1 w-fit border-white/15 text-xs font-medium text-muted-foreground"
        >
          {Day ? "Morning shift" : "Evening shift"}
        </Badge>
        <CardDescription className="pt-2">
          Attempt this paper as a mock test.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/mock-test/${RedirectValue}`} className="w-full">
          <Button className="w-full bg-gradient-brand font-semibold text-black hover:opacity-90">
            <CornerDownRight className="mr-2 h-4 w-4" /> Solve
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
