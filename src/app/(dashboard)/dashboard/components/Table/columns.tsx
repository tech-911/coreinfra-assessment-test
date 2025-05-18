"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// This type is used to define the shape of our data.
export type Payment = {
  id: string;
  dateTime: string;
  activityType: string;
  amount: string;
  status: string;
  action: boolean;
};

export const columns: (
  args: AppRouterInstance
) => ColumnDef<Payment>[] = () => [
  {
    accessorKey: "dateTime",
    header: () => {
      // console.log("table checking......", table);
      return (
        <p className="text-sm font-medium text-foreground/80 whitespace-nowrap text-center">
          Branch
        </p>
      );
    },
    cell: ({ row }) => (
      <div className="text-foreground/60 text-xs font-normal whitespace-nowrap text-center">
        {row.getValue("dateTime")}
      </div>
    ),
  },
  {
    accessorKey: "activityType",
    header: () => (
      <p className="text-sm font-medium text-foreground/70 whitespace-nowrap text-center">
        Card Type
      </p>
    ),
    cell: ({ row }) => (
      <div className="text-foreground/60 text-xs font-normal whitespace-nowrap text-center">
        {row.getValue("activityType")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => (
      <p className="text-sm font-medium text-foreground/70 whitespace-nowrap text-center">
        Quantity
      </p>
    ),
    cell: ({ row }) => (
      <div
        className={`text-foreground/60 text-xs font-normal whitespace-nowrap text-center ${
          row.getValue("amount") === "" ? "ml-[15px]" : ""
        }`}
      >
        {row.getValue("amount") === "" ? "-" : row.getValue("amount")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <p className="text-sm font-medium text-foreground/70 whitespace-nowrap text-center">
        Status
      </p>
    ),
    cell: ({ row }) => (
      <div className="w-full flex flex-col items-center">
        <p
          className={`h-7 px-3 flex flex-row items-center justify-center w-fit rounded-full ${
            row.getValue("status") === "Ready"
              ? "bg-[#ECFDF3] border text-[#067647] border-[#ABEFC6]"
              : row.getValue("status") === "In Progress"
              ? "bg-[#FFFAEB] border text-[#B54708] border-[#FEDF89]"
              : row.getValue("status") === "Acknowledged"
              ? "bg-[#EFF8FF] border text-[#175CD3] border-[#B2DDFF]"
              : row.getValue("status") === "Pending"
              ? "bg-[#F9FAFB] border text-[#344054] border-[#EAECF0]"
              : "bg-[#fdcb9b]"
          }`}
        >
          {row.getValue("status")}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: () => (
      <p className="text-sm font-medium text-foreground/70 whitespace-nowrap text-center">
        Action
      </p>
    ),
    cell: () => (
      <div className="text-primary text-xs font-bold whitespace-nowrap text-center cursor-pointer">
        View
      </div>
      //   <Button
      //     variant="default"
      //     className="bg-primary/30 border-none rounded-full px-7 h-7"
      //   >
      //     {row.getValue("action")}
      //     Details
      //   </Button>
    ),
  },
];
