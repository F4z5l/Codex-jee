import React from "react";
import ExamCard from "./ExamCard";
import { Jee, OtherExams } from "@/lib/examInfo";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <span className="text-sm text-muted-foreground">{eyebrow}</span>
    </div>
  );
}

export default function ExamList() {
  return (
    <div className="container max-w-6xl px-4 py-14 md:px-6">
      <section id="jee-mains" className="scroll-mt-24">
        <SectionHeading eyebrow={`${Jee.length} papers`} title="JEE Main 2024" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Jee.map(({ Title, RedirectValue, Day }) => (
            <ExamCard
              key={Title}
              Day={Day}
              RedirectValue={RedirectValue}
              Title={Title}
            />
          ))}
        </div>
      </section>

      <section id="other-exams" className="mt-16 scroll-mt-24">
        <SectionHeading
          eyebrow={`${OtherExams.length} papers`}
          title="Other Entrance Exams"
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {OtherExams.map(({ Title, RedirectValue, Day }) => (
            <ExamCard
              key={Title}
              Day={Day}
              RedirectValue={RedirectValue}
              Title={Title}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
