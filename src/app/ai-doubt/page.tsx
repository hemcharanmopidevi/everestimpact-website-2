"use client";

import { Send, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { PageIntro } from "@/components/page-intro";
import { buttonPrimary, inputClass } from "@/lib/styles";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; text: string };

const starter: Msg[] = [
  {
    role: "assistant",
    text: "Ask me anything about SSC CGL, CHSL or GD: Quant, English, Reasoning or the syllabus. I'll answer with a short plan you can follow today.",
  },
];

const prompts = ["How do I prepare Tier-II Quant?", "Best way to learn English grammar?", "What is in the Tier-I syllabus?"];

function mockAnswer(question: string) {
  const q = question.toLowerCase();
  if (q.includes("syllabus") || q.includes("tier")) {
    return "For SSC CGL Tier-I, cover Quant, Reasoning, English and General Awareness. Tier-II goes deeper into Quant and English, plus Statistics or Finance depending on the post. Start with previous-year papers, then move to timed mocks.";
  }
  if (q.includes("math") || q.includes("quant") || q.includes("percentage")) {
    return "Split Quant into arithmetic first, then advanced maths. Master percentages, ratio, simple and compound interest, and time and work before geometry and algebra. Aim for 25 to 30 timed questions a day.";
  }
  if (q.includes("english") || q.includes("grammar") || q.includes("vocab")) {
    return "Revise the 150 golden grammar rules, read an editorial for 20 minutes a day, and learn 20 words with example sentences. Error spotting and cloze tests improve fastest with daily practice.";
  }
  return "Break the topic into concept, one worked example, ten practice questions, then one timed drill. Tell me the exact topic, such as boats and streams, and I'll give you a step-by-step plan.";
}

export default function AIDoubtPage() {
  const [messages, setMessages] = useState<Msg[]>(starter);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1) endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  const ask = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { role: "user", text: clean }, { role: "assistant", text: mockAnswer(clean) }]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
    setInput("");
  };

  return (
    <>
      <PageIntro
        narrow
        title="Ask a doubt"
        lede="Instant study help, any time. This demo gives sample answers; your faculty answer the harder ones in class."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div
          role="log"
          aria-live="polite"
          className="min-h-[22rem] space-y-4 rounded-2xl border-2 border-dashed border-primary/25 bg-card p-4 md:p-6"
        >
          {messages.map((m, i) => (
            <div key={i} className={cn("flex gap-3", m.role === "user" && "justify-end")}>
              {m.role === "assistant" && (
                <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Sparkles className="size-4" aria-hidden />
                </span>
              )}
              <p
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed",
                  m.role === "user"
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm bg-lobe-2 text-foreground"
                )}
              >
                <span className="sr-only">{m.role === "user" ? "You: " : "Doubt solver: "}</span>
                {m.text}
              </p>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {messages.length === 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => ask(p)}
                className="rounded-full border border-dashed border-primary/40 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-solid hover:border-primary hover:text-primary"
              >
                {p}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
          <label htmlFor="doubt" className="sr-only">
            Your question
          </label>
          <input
            id="doubt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your doubt"
            className={cn(inputClass, "flex-1")}
          />
          <button type="submit" className={buttonPrimary}>
            <Send className="size-4" aria-hidden />
            Ask
          </button>
        </form>
      </div>
    </>
  );
}
