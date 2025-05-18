"use client";

import { cn } from "@/lib/utils";
import React from "react";

export default function CardsContainer({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "flex bg-card rounded-[10px] border border-border/50 p-[16px] w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
