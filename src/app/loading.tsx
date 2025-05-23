"use client";

import React from "react";
// import Spinner from "@/assets/svg/Spinner.svg";
// import Image from "next/image";
import { Icon } from "@iconify/react";

const Preloader = () => {
  return (
    <div className="flex flex-col items-center pt-[20%] bg-primary/5 w-full h-full fixed top-0 left-0 z-50">
      <div className="w-fit h-fit flex flex-col items-center">
        {/* <Image className="mb-[8px]" src={Spinner} alt={"animated loader"} /> */}
        <Icon
          icon="eos-icons:bubble-loading"
          className="text-primary text-[100px] mb-[30px]"
        />
        <p className="text-foreground text-[16px] font-[700] leading-5">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
