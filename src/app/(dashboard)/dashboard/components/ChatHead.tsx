"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

function ChatHead({
  heading,
  className,
  canResize = true,
}: {
  heading: string;
  className?: string;
  canResize?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between w-full py-4 px-3",
        className
      )}
    >
      <h1 className="text-lg font-medium text-foreground">{heading}</h1>
      <Icon
        icon="solar:maximize-bold"
        className={`text-[20px] hover:text-secondary text-border/70 cursor-pointer transition-all duration-200 ease-in-out ${
          canResize ? "" : "hidden"
        }`}
      />
    </div>
  );
}

export default ChatHead;
