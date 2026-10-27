"use client";

import { CheckCircle2, Circle, Plus, Trash2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { PageIntro } from "@/components/page-intro";
import { buttonPrimary, inputClass } from "@/lib/styles";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const KEY = "everest-planner";
const suggestions = ["50 Quant questions", "Read one editorial", "20 new vocabulary words", "One timed mock"];

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    try {
      setTasks(JSON.parse(localStorage.getItem(KEY) || "[]"));
    } catch {
      setTasks([]);
    }
  }, []);

  const persist = (next: Task[]) => {
    setTasks(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // Storage can be blocked; the list still works for this visit.
    }
  };

  const add = (text: string) => {
    if (!text.trim()) return;
    persist([...tasks, { id: crypto.randomUUID(), title: text.trim(), done: false }]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    add(title);
    setTitle("");
  };

  const doneCount = tasks.filter((t) => t.done).length;
  const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

  return (
    <>
      <PageIntro
        narrow
        title="Today's study plan"
        lede="Set today's targets and tick them off. Your list is saved in this browser."
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-lobe-2 to-lobe-1 p-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-semibold text-foreground">
              {tasks.length === 0
                ? "No targets yet"
                : doneCount === tasks.length
                  ? "Every target done. Rest well."
                  : `${doneCount} of ${tasks.length} done`}
            </span>
            <span className="font-display text-2xl tabular-nums text-primary">{progress}%</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-card">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-highlight transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6 flex gap-2">
          <label htmlFor="new-task" className="sr-only">
            New target
          </label>
          <input
            id="new-task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a target, such as 50 Quant questions"
            className={cn(inputClass, "flex-1")}
          />
          <button type="submit" className={buttonPrimary}>
            <Plus className="size-4" aria-hidden />
            Add
          </button>
        </form>

        {tasks.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <p className="font-medium text-card-foreground">Start with a usual day for an SSC aspirant:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => add(s)}
                  className="rounded-full border border-dashed border-primary/40 px-4 py-2 text-sm font-medium text-foreground transition hover:border-solid hover:border-primary hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <ul className="mt-6 space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <button
                  type="button"
                  aria-label={task.done ? `Mark “${task.title}” not done` : `Mark “${task.title}” done`}
                  aria-pressed={task.done}
                  onClick={() => persist(tasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)))}
                  className="text-primary"
                >
                  {task.done ? <CheckCircle2 className="size-6" /> : <Circle className="size-6" />}
                </button>
                <span className={task.done ? "flex-1 text-muted-foreground line-through" : "flex-1 font-medium text-card-foreground"}>
                  {task.title}
                </span>
                <button
                  type="button"
                  aria-label={`Delete “${task.title}”`}
                  onClick={() => persist(tasks.filter((t) => t.id !== task.id))}
                  className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
