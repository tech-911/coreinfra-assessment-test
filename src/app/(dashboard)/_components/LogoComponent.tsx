"use client";

import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function LogoComponent() {
  return (
    <Button variant="link" onClick={() => window.location.replace("/")}>
      <Image
        src={Logo}
        alt="Logo"
        width={139}
        height={45}
        quality={100}
        priority
      />
    </Button>
  );
}
