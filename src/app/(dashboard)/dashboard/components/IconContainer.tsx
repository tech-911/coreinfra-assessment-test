"use client";

import { cn } from "@/lib/utils";
import React from "react";

export default function IconContainer({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center rounded-full min-h-7 h-7 min-w-7 w-7 bg-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
