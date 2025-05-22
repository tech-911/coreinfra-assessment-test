"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";

export default function MobileSideButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-primary/10 group cursor-pointer"
        >
          <Icon
            icon="quill:hamburger"
            className="text-foreground/60 text-[25px] flex sm:hidden"
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="border-none bg-sidebar w-full sm:w-1/2 xsm:w-[70%] xl:w-[40%] pl-4"
      >
        <div className="w-full h-full overflow-auto pr-5">
          <SideBar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
