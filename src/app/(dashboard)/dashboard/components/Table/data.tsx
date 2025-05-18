"use client";

import { Payment } from "./columns";

export const data: Payment[] = [
  {
    id: "0",
    dateTime: "Corporate",
    activityType: "Instant",
    amount: "10",
    status: "Ready",
    action: true,
  },
  {
    id: "1",
    dateTime: "Corporate",
    activityType: "Personalized",
    amount: "10",
    status: "In Progress",
    action: true,
  },
  {
    id: "2",
    dateTime: "Corporate",
    activityType: "Personalized",
    amount: "10",
    status: "Acknowledged",
    action: true,
  },
  {
    id: "3",
    dateTime: "Corporate",
    activityType: "Instant",
    amount: "10",
    status: "Pending",
    action: true,
  },
];
