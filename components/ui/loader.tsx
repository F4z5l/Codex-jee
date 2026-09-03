import Logo from "@/components/Logo";

interface LoaderProps {
  TextValue: string;
}

export default function Loader({ TextValue }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-1 py-2">
      <div className="motion-safe:animate-float">
        <Logo size={48} />
      </div>
      <h1 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
        CodeXStudys<span className="text-muted-foreground">{TextValue}</span>
      </h1>
    </div>
  );
}
