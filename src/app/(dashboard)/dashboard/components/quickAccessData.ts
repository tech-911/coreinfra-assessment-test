"use client";

import ManageCard from "@/assets/dashboard-svgs/credit-card-shield.svg";
import InstantCard from "@/assets/dashboard-svgs/credit-card-02.svg";
import PersonalCard from "@/assets/dashboard-svgs/credit-card-edit.svg";
import CardRequest from "@/assets/dashboard-svgs/credit-card-plus.svg";

export type quickAccessDataType = {
  id: number;
  DashIcon: React.FC<{ className: string }>;
  title: string;
};

export const quickAccessData: quickAccessDataType[] = [
  {
    id: 0,
    DashIcon: ManageCard,
    title: "Manage a Card",
  },
  {
    id: 1,
    DashIcon: InstantCard,
    title: "Issue Instant Card",
  },
  {
    id: 2,
    DashIcon: PersonalCard,
    title: "Issue Personalized Card",
  },
  {
    id: 3,
    DashIcon: CardRequest,
    title: "Review Card Requests",
  },
];
