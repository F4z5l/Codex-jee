"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ExamQuestion from "@/components/ExamQuestion";
import Loader from "@/components/ui/loader";
import Logo from "@/components/Logo";

export default function Page({ params }: { params: { slug: string } }) {
  const [examData, setExamData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [params.slug]);

  async function fetchData() {
    try {
      const response = await fetch(`/sqp/${params.slug}.json`);
      if (response.ok) {
        const data = await response.json();
        setExamData(data);
      } else {
        console.error("Failed to fetch data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const examLabel = params.slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50 border-x-0 border-t-0 border-b border-white/10">
        <div className="container flex h-16 max-w-4xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Study Hub
          </Link>
          <Logo size={28} />
        </div>
      </header>

      <div className="container max-w-4xl px-4 py-8 md:px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {examLabel}
        </p>
        <div className="grid grid-cols-1 gap-4">
          {examData.length === 0 && (
            <div className="flex min-h-[50vh] items-center justify-center overscroll-none">
              <Loader TextValue=" is loading…" />
            </div>
          )}
          {examData.map((question) => (
            <ExamQuestion
              key={question.qid}
              QuestionId={question.qid}
              Question={question.question_value}
              QuestionNumber={question.question_number}
              Options={question.options || {}}
              CorrectAnswer={question.correct_answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
