"use client";

import ActiveCard from "@/assets/dashboard-svgs/credit-card-check.svg";
import PersonalizedCards from "@/assets/dashboard-svgs/credit-card-edit2.svg";
import Revenue from "@/assets/dashboard-svgs/bank-note-01.svg";
import Pending from "@/assets/dashboard-svgs/hourglass-03.svg";

export type analyticsCardsDataType = {
  id: number;
  title: string;
  value: string;
  percentage: string;
  minInfo: string;
  AnalyticsIcon: React.FC<{ className?: string }>;
  attention: boolean;
};

export const analyticsCardsData = [
  {
    id: 0,
    title: "Total Active Cards",
    value: "26,478",
    percentage: "+9%",
    minInfo: "this month",
    AnalyticsIcon: ActiveCard,
    attention: false,
  },
  {
    id: 1,
    title: "Total Personalized Cards",
    value: "15,703",
    percentage: "8.5%",
    minInfo: "this month",
    AnalyticsIcon: PersonalizedCards,
    attention: false,
  },
  {
    id: 2,
    title: "Today’s Revenue",
    value: "₦9.3M",
    percentage: "+6%",
    minInfo: "vs yesterday",
    AnalyticsIcon: Revenue,
    attention: false,
  },
  {
    id: 3,
    title: "Pending Requests",
    value: "38",
    percentage: "",
    minInfo: "",
    AnalyticsIcon: Pending,
    attention: true,
  },
];
