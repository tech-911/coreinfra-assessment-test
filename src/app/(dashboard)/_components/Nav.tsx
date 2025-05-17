"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import Home from "@/assets/sidebar-svgs/dashboard.svg";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="min-h-[48px] z-[1] bg-card w-full flex flex-row items-center justify-between border-b border-b-ring px-[21.34px]">
      <div className="flex flex-row items-center gap-3">
        <Home className="text-foreground" />
        <p className="xl:text-base text-base font-medium text-foreground/70 sm:flex hidden">
          {pathname === "/dashboard"
            ? "Dashboard"
            : pathname.includes("/branches")
            ? "Branches"
            : pathname === "/roles"
            ? "Roles"
            : ""}
        </p>
      </div>

      <div className="flex flex-row items-center gap-7 xxl:gap-10">
        <div className="flex relative">
          <Input
            className="border-searchBorder min-w-[214px] w-full pl-9 rounded-[20px] h-[32px] placeholder:text-foreground text-foreground"
            type="text"
            placeholder="Search"
          />
          <Icon
            icon="majesticons:search-line"
            className="text-foreground/60 text-[20px] absolute top-[7px] left-[10px]"
          />
        </div>

        <Icon
          icon="qlementine-icons:bell-16"
          className="text-foreground text-[20px] cursor-pointer"
        />
        <div className="flex flex-row items-center cursor-pointer justify-center rounded-full border border-border w-8 h-8 bg-foreground/5">
          <Icon
            icon="hugeicons:user-02"
            className="text-foreground text-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
