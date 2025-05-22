"use client";

import React from "react";
import DashContainer from "../_components/DashContainer";
import { DatePicker } from "./components/datePicker";
import CardsContainer from "../_components/CardsContainer";
import DashWidget from "./components/DashWidget";
import { quickAccessData } from "./components/quickAccessData";
import { analyticsCardsData } from "./components/analyticsCardsData";
import AnalyticsCard from "./components/AnalyticsCard";
import ChatHead from "./components/ChatHead";
import BarChartComponent from "./components/barChart";
import LineGraphComponent from "./components/lineGraphComponent";
import DiagramLegend from "./components/Legend";
import PieChartComponent from "./components/pieChartComponent";
import { DataTable } from "./components/Table/table";
import { columns } from "./components/Table/columns";
import { useRouter } from "next/navigation";
import { data } from "./components/Table/data";

const pieLegendData: {
  id: number;
  text: string;
  classNameDot: string;
}[] = [
  {
    id: 0,
    text: "Active",
    classNameDot: "bg-chart-2",
  },
  {
    id: 1,
    text: "Expired",
    classNameDot: "bg-chart-3",
  },
  {
    id: 2,
    text: "Inactive",
    classNameDot: "bg-primary",
  },
  {
    id: 3,
    text: "Blocked",
    classNameDot: "bg-chart-4",
  },
  {
    id: 4,
    text: "Lost",
    classNameDot: "bg-chart-5",
  },
];

function Dashboard() {
  const router = useRouter();
  return (
    <DashContainer>
      {/* -----header */}
      <div className="flex flex-col xsm:flex-row items-start justify-between gap-5 sm:gap-1.5 w-full">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-lg font-bold text-foreground">
            Hi Nazeer, what would you like to do today?
          </h1>
          <p className="text-sm font-medium text-foreground">
            Last login:{" "}
            <span className="text-foreground/60">26/11/2024 14:39:58</span>
          </p>
        </div>
        {/* -----date picker */}
        <DatePicker />
      </div>
      {/* -----Quick Access section */}
      <CardsContainer className="mt-3.5">
        <div className="flex flex-col items-start gap-3.5 w-full">
          <p className="text-base font-medium text-foreground">
            Your Quick Access
          </p>
          <div className="flex flex-row items-center gap-2 w-full flex-wrap">
            {quickAccessData.map(({ id, DashIcon, title }) => {
              return (
                <DashWidget
                  key={id}
                  id={id}
                  DashIcon={DashIcon}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </CardsContainer>
      {/* -----Analytics section */}
      {/* -----Analytics Divide */}
      <div className="my-3 w-full flex flex-row items-center gap-2">
        <h1 className="text-lg font-bold text-foreground">Analytics</h1>
        <div className="w-full h-[1px] bg-foreground/15" />
      </div>
      {/* -----Analytics cards */}
      <div className="w-full flex flex-row items-center gap-2 flex-wrap">
        {analyticsCardsData?.map(
          ({
            id,
            AnalyticsIcon,
            attention,
            minInfo,
            percentage,
            title,
            value,
          }) => {
            return (
              <AnalyticsCard
                key={id}
                id={id}
                AnalyticsIcon={AnalyticsIcon}
                attention={attention}
                minInfo={minInfo}
                percentage={percentage}
                title={title}
                value={value}
              />
            );
          }
        )}
      </div>
      {/* -----Analytics charts */}
      <div className="w-full flex flex-row items-start gap-2 mt-2 flex-wrap">
        {/* -----Left chart set */}
        <div className="flex flex-col items-start gap-2 w-full flex-1">
          {/* -----Bar Chart */}
          <CardsContainer className="min-w-[300px] 1md:min-w-[208px] flex-1 p-0">
            <div className="w-full flex flex-col items-center gap-[14px]">
              <ChatHead heading="Monthly Issuance" />
              {/* -----rechart Bar Chart */}
              <div className="px-3 w-full">
                <BarChartComponent />
              </div>
              <div className="h-10  border-t border-t-border/50 w-full flex flex-row items-center justify-center gap-6">
                <DiagramLegend text="Personalized" />
                <DiagramLegend text="Instant" classNameDot="bg-secondary" />
              </div>
            </div>
          </CardsContainer>
          {/* -----Line Graph */}
          <CardsContainer className="1md:min-w-[208px] flex-1 py-4 px-3">
            <div className="w-full flex flex-col items-center gap-[22px]">
              <ChatHead heading="This Week’s Income" />
              {/* -----rechart Line Graph */}
              <div className="w-full">
                <LineGraphComponent />
              </div>
            </div>
          </CardsContainer>
        </div>
        {/* -----right chart set */}
        <div className="flex flex-col items-start gap-2 w-full ssm:flex-1">
          {/* -----table card*/}
          <CardsContainer className="1md:min-w-[208px] w-full ssm:flex-1 py-4 px-3">
            <div className="w-full flex flex-col items-center gap-[22px]">
              <ChatHead heading="Recent Card Requests" />
              {/* -----main table */}
              <div className="w-full">
                <DataTable data={data} columns={columns(router)} />
              </div>
            </div>
          </CardsContainer>
          {/* -----Pie Chart */}
          <CardsContainer className="1md:min-w-[208px] flex-1 py-4 px-3">
            <div className="w-full flex flex-col items-center gap-[22px]">
              <ChatHead heading="Card Status Distribution" canResize={false} />
              {/* -----rechart Pie Chart */}
              <div className="w-full">
                <PieChartComponent />
              </div>
              <div className="h-10 w-full px-2.5 flex flex-row items-center justify-center gap-2.5 xsm:gap-6 flex-wrap">
                {pieLegendData?.map(({ classNameDot, id, text }) => {
                  return (
                    <DiagramLegend
                      key={id}
                      text={text}
                      classNameDot={classNameDot}
                    />
                  );
                })}
              </div>
            </div>
          </CardsContainer>
        </div>
      </div>
    </DashContainer>
  );
}

export default Dashboard;
