"use client";

import React from "react";
import LogoComponent from "./LogoComponent";
import Image from "next/image";
import { sidebarData } from "./sideBarData";
import { usePathname, useRouter } from "next/navigation";
import Dashboard from "@/assets/sidebar-svgs/dashboard.svg";
import Logout from "@/assets/sidebar-svgs/logout.svg";
import CardinfraLogo from "@/assets/images/cardinfra-logo.png";

function SideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const handleRouting = (link: string) => {
    router.push(link);
  };
  const handleLogout = () => {
    console.log("Logout");
  };
  return (
    <div className="h-full w-full px-[10px] pt-[27px]">
      <LogoComponent />
      {/* -----------Dashboard Button */}
      <div
        onClick={() => handleRouting("/dashboard")}
        className={`mt-8 pl-[16px] lg:pl-[24px] rounded-[8px] cursor-pointer min-h-[40px] w-full flex flex-row items-center gap-[10px] lg:gap-[20px] hover:bg-primary/10 group ${
          pathname === "/dashboard"
            ? "bg-sidebar-accent border border-border"
            : "text-sidebar-foreground"
        }`}
      >
        <Dashboard
          className={`group-hover:text-primary ${
            pathname === "/dashboard"
              ? "text-primary"
              : "text-sidebar-foreground"
          }`}
        />
        <p
          className={`text-base xl:text-xl font-medium group-hover:text-primary ${
            pathname === "/dashboard"
              ? "text-primary"
              : "text-sidebar-foreground"
          }`}
        >
          Dashboard
        </p>
      </div>
      {/* -------------Sidebar Menu */}
      <div className="w-full flex flex-col items-start mt-4">
        {sidebarData.map(({ section, list }, id) => {
          return (
            <div
              key={id}
              className={`w-full flex flex-col items-start gap-4 pb-11 ${
                section === "MAIN MENU" ? "border-b border-b-[#ffffff1d]" : ""
              }`}
            >
              <p className="text-sidebar-foreground text-xs xl:text-base lg:pl-[24px] font-[500] pl-[16px]">
                {section}
              </p>
              <div className="flex flex-col items-start gap-[4px] w-full">
                {list?.map(({ name, path, Icon }, id) => {
                  return (
                    <div
                      onClick={() => handleRouting(path)}
                      key={`name${id}`}
                      className={`pl-[16px] lg:pl-[24px] rounded-[8px] cursor-pointer min-h-[40px] w-full flex flex-row items-center gap-[10px] lg:gap-[20px] hover:bg-primary/10 group ${
                        pathname === path
                          ? "bg-sidebar-accent border border-border"
                          : "text-sidebar-foreground"
                      }`}
                    >
                      <Icon
                        className={`group-hover:text-primary ${
                          pathname === path
                            ? "text-primary"
                            : "text-sidebar-foreground"
                        }`}
                      />
                      <p
                        className={`text-sm xl:text-xl font-medium group-hover:text-primary ${
                          pathname === path
                            ? "text-primary"
                            : "text-sidebar-foreground"
                        }`}
                      >
                        {name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* -------Logout Button  */}
      <div
        onClick={() => handleLogout()}
        className={`text-sidebar-foreground mt-[60px] pl-[16px] lg:pl-[24px] rounded-[8px] cursor-pointer min-h-[40px] w-full flex flex-row items-center gap-[10px] lg:gap-[20px] hover:bg-primary/10 group `}
      >
        <Logout
          className={`group-hover:text-primary text-sidebar-foreground`}
        />
        <p
          className={`text-base xl:text-xl font-medium group-hover:text-primary text-sidebar-foreground`}
        >
          Logout
        </p>
      </div>
      {/* -------Powered by image  */}
      <div className="w-full flex flex-col items-start mt-[44px] gap-[11] pb-[30px]">
        <p className="text-sidebar-foreground/50 text-xs xl:text-base lg:pl-[24px] font-[500] pl-[16px]">
          POWERED BY
        </p>
        <Image
          src={CardinfraLogo}
          alt="powered by"
          width={93}
          height={42}
          className="lg:ml-[24px] ml-[16px]"
        />
      </div>
    </div>
  );
}

export default SideBar;
