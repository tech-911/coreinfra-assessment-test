"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "min-h-[30px] h-[30px] justify-start px-3 hover:bg-primary/5 rounded-[4px]",
            !date && "text-muted-foreground"
          )}
        >
          <div className="flex flex-row items-center gap-1">
            <CalendarIcon className="text-foreground" />
            <p className="text-xs font-medium text-foreground">Today</p>
          </div>

          <div className="w-[1px] h-2.5 bg-foreground/20 mx-2" />

          {date ? (
            <span className="text-xs font-medium text-foreground">
              {format(date, "PPP")}
            </span>
          ) : (
            <span className="text-xs font-medium text-foreground">
              11 Nov 2024
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
