"use client";

import React from "react";
import { Icon } from "@iconify/react";
import IconContainer from "./IconContainer";
import { quickAccessDataType } from "./quickAccessData";

function DashWidget({ id, DashIcon, title }: quickAccessDataType) {
  return (
    <div
      key={id}
      className="flex flex-row items-center group gap-4 min-w-[250px] 2md:max-w-[300px] basis-[250px] flex-1 bg-background hover:bg-primary/10 rounded-[4px] min-h-[45px] px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out"
    >
      <IconContainer>
        <DashIcon className="text-card" />
      </IconContainer>
      <div className="flex flex-row items-center gap-1.5">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <Icon
          icon="uiw:right"
          className="text-foreground/50 text-[16px] group-hover:ml-[1px] transition-all duration-200 ease-in-out"
        />
      </div>
    </div>
  );
}

export default DashWidget;
