"use client";

import { BadgeCheck, Trophy, Mountain } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
}: LessonButtonProps) => {
  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? BadgeCheck : isLast ? Trophy : Mountain;
  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        <div className="relative h-[102px] w-[102px] flex flex-col items-center justify-center">
          {current && (
            <div className="absolute -top-6 left-2.5 z-10 animate-bounce rounded-xl border-2 bg-white px-3 py-2.5 font-bold uppercase tracking-wide text-[#213741]">
              Start
              <div
                className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent border-t-white"
                aria-hidden
              />
            </div>
          )}

<Button
  variant={locked ? "locked" : "secondary"}
  className={cn(
    "h-[70px] w-[70px] shadow-md transition hover:shadow-lg",
    locked ? "bg-gray-300" : "bg-white text-gray-900",
    "rounded-xl border border-gray-300"
  )}
>
  <Icon
    className={cn(
      "h-8 w-8",
      locked
        ? "text-gray-400"
        : "text-green-600",
      isCompleted && "stroke-[2]"
    )}
  />
</Button>

          {current && (
  <div className="mt-2 w-[480px] h-2 bg-gray-200 rounded overflow-hidden">
    <div
      className="h-full bg-green-400 transition-all duration-300"
      style={{ width: `${Math.min(percentage, 100)}%` }}
    />
  </div>
)}
        </div>
      </div>
    </Link>
  );
};