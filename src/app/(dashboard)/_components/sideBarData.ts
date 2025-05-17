"use client";
import React from "react";
import Branches from "@/assets/sidebar-svgs/branches.svg";
import Roles from "@/assets/sidebar-svgs/roles.svg";
import Users from "@/assets/sidebar-svgs/users.svg";
import CardScheme from "@/assets/sidebar-svgs/card-scheme.svg";
import CardProfile from "@/assets/sidebar-svgs/card-profile.svg";
import CardRequest from "@/assets/sidebar-svgs/card-request.svg";
import Stock from "@/assets/sidebar-svgs/stock.svg";
import Cards from "@/assets/sidebar-svgs/cards.svg";
import AuthorizationList from "@/assets/sidebar-svgs/list.svg";
import AuthorizationQueue from "@/assets/sidebar-svgs/queue.svg";
import Trail from "@/assets/sidebar-svgs/trail.svg";
import Account from "@/assets/sidebar-svgs/account.svg";


type SideBarType<T> = {
  section: string;
  list?: T;
}[];
type listType = {
  name: string;
  path: string;
  Icon: React.FC<{ className: string }>;
}[];

export const sidebarData: SideBarType<listType> = [
  {
    section: "MAIN MENU",
    list: [
      {
        name: "Branches",
        path: "/branches",
        // tagText: "",
        Icon: Branches,
      },
      {
        name: "Roles",
        path: "/roles",
        // tagText: "",
        Icon: Roles,
      },
      {
        name: "Users",
        path: "/users",
        // tagText: "",
        Icon: Users,
      },
      {
        name: "Card Scheme",
        path: "/card-scheme",
        // tagText: "",
        Icon: CardScheme,
      },
      {
        name: "Card Profile",
        path: "/card-profile",
        // tagText: "",
        Icon: CardProfile,
      },
      {
        name: "Card Request",
        path: "/card-request",
        // tagText: "",
        Icon: CardRequest,
      },
      {
        name: "Stock",
        path: "/stock",
        // tagText: "",
        Icon: Stock,
      },
      {
        name: "Cards",
        path: "/cards",
        // tagText: "",
        Icon: Cards,
      },
      {
        name: "Authorization List",
        path: "/authorization-list",
        // tagText: "",
        Icon: AuthorizationList,
      },
      {
        name: "Authorization Queue",
        path: "/authorization-queue",
        // tagText: "",
        Icon: AuthorizationQueue,
      },
      {
        name: "Trail",
        path: "/trail",
        // tagText: "",
        Icon: Trail,
      },
      {
        name: "Account",
        path: "/account",
        // tagText: "",
        Icon: Account,
      },
    ],
  },
];
