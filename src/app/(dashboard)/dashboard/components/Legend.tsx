"use client";

import { cn } from "@/lib/utils";
import React from "react";

function DiagramLegend({
  text,
  className,
  classNameDot,
  classNameText,
}: {
  text?: string;
  className?: string;
  classNameDot?: string;
  classNameText?: string;
}) {
  return (
    <div className={cn("flex flex-row items-center gap-1", className)}>
      <div
        className={cn(
          "flex flex-row rounded-full min-h-2 min-w-2 h-2 w-2 bg-primary",
          classNameDot
        )}
      />
      <p
        className={cn("text-xs font-normal text-foreground/50", classNameText)}
      >
        {text}
      </p>
    </div>
  );
}

export default DiagramLegend;
