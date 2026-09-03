"use client";

import React, { useEffect, useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { NumericalBox } from "./NumericalBox";

interface ExamQuestionProps {
  Question: {
    text: string | null;
    img_url: string;
  };
  QuestionId: string;
  QuestionNumber: number;
  Options: {
    [key: string]:
    | string
    | { text: string | null; img_url: string }
    | undefined;
  };
  CorrectAnswer: number;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({
  Question,
  QuestionNumber,
  Options,
  CorrectAnswer,
}) => {
  function rectifyLatex(latexString: string): string {
    // Replaces $$...$$ with \(...\)
    latexString = latexString.replace(/\$\$(.*?)\$\$/g, "\\($1\\)");

    return latexString;
  }

  const [RightAnswer, setCorrectAnswer] = useState("");
  const [SelectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    0
  );

  useEffect(() => { }, [SelectedButtonIndex, RightAnswer]);

  const handleOptionClick = (index: number) => {
    if (index === CorrectAnswer) {
      setSelectedButtonIndex(index);
      setCorrectAnswer("Correct");
    } else {
      setSelectedButtonIndex(index);
      setCorrectAnswer("Wrong");
    }
  };

  return (
    <div>
      <div className="glass whitespace-normal rounded-xl border-white/10 p-4">
        <h1
          className={cn(
            "inline-block max-content scroll-m-20 rounded-md border-2 border-white/10 bg-white/[0.04] px-3 py-1.5 text-xl font-extrabold tracking-tight text-foreground",
            RightAnswer === "Correct"
              ? "border-success text-success"
              : RightAnswer === "Wrong"
                ? "border-danger text-danger"
                : ""
          )}
        >
          Question {QuestionNumber} :
        </h1>
        <p className="overflow-hidden overflow-ellipsis whitespace-normal px-1 py-3 font-sans text-sm font-medium text-muted-foreground md:text-lg">
          <Latex>{rectifyLatex(Question.text ? Question.text : "N.A")}</Latex>
        </p>
        {Question.img_url && (
          <img
            src={Question.img_url}
            alt={`Ques ${QuestionNumber}`}
            className="rounded-lg contrast-200 grayscale saturate-200 brightness-200"
          />
        )}

        <div className="grid w-full gap-3 py-5 sm:grid-cols-1 md:grid-cols-2">
          {Object.entries(Options).length === 0 ? (
            <NumericalBox RightAns={CorrectAnswer} />
          ) : (
            Object.entries(Options).map(([optionKey, option], index) => (
              <div key={optionKey}>
                {typeof option === "string" ? (
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full overflow-hidden overflow-ellipsis whitespace-normal rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-left font-sans text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.08] sm:text-xs lg:text-lg",
                      RightAnswer === "Correct" && SelectedButtonIndex === index
                        ? "border-success bg-success/20 text-success"
                        : RightAnswer === "Wrong" && SelectedButtonIndex === index
                          ? "border-danger bg-danger/20 text-danger"
                          : ""
                    )}
                    onClick={() => handleOptionClick(index)}
                  >
                    <Latex strict>{rectifyLatex(option)}</Latex>
                  </Button>
                ) : (
                  option && (
                    <Button
                      variant="outline"
                      className={cn(
                        "h-full w-full rounded-lg border-2 border-white/10 bg-white/[0.03]",
                        RightAnswer === "Correct" && SelectedButtonIndex === index
                          ? "border-success"
                          : RightAnswer === "Wrong" && SelectedButtonIndex === index
                            ? "border-danger"
                            : ""
                      )}
                      onClick={() => handleOptionClick(index)}
                    >
                      <img
                        src={option.img_url}
                        alt={`Option ${optionKey}`}
                        width="150px"
                        height="150px"
                        className="grayscale saturate-200 brightness-200"
                      />
                    </Button>
                  )
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
