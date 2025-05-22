"use client";

import { cn } from "@/lib/utils";
import React from "react";

function DashContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("px-5 sm:pt-2 pt-5 pb-5 bg-transparent w-full", className)}
    >
      {children}
    </div>
  );
}

export default DashContainer;
