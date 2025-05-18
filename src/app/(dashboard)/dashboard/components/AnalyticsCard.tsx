"use client";

import React from "react";
import { analyticsCardsDataType } from "./analyticsCardsData";
import CardsContainer from "../../_components/CardsContainer";
import { Icon } from "@iconify/react";

function AnalyticsCard({
  id,
  AnalyticsIcon,
  attention,
  minInfo,
  percentage,
  title,
  value,
}: analyticsCardsDataType) {
  return (
    <CardsContainer
      key={id}
      className="min-w-[250px] max-w-[300px] basis-[250px] flex-1 py-4 px-3"
    >
      <div className="w-full flex flex-col items-start gap-3">
        <div className="flex flex-col items-start gap-1">
          <AnalyticsIcon />
          <p className="text-sm font-medium text-foreground/50">{title}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-foreground">{value}</h1>
          {attention ? (
            <div className="flex flex-row items-center gap-1">
              <Icon
                icon="akar-icons:circle-alert"
                className="text-icon-orange text-[12px]"
              />
              <p className="text-xs font-normal text-icon-orange">
                Requires attention
              </p>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2">
              <div className="rounded-[4px] min-h-5 px-[9px] py-[7px] bg-icon-green/10 flex flex-row items-center gap-1">
                <Icon
                  icon="solar:arrow-right-up-outline"
                  className="text-icon-green text-[12px]"
                />
                <p className="text-xs font-medium text-icon-green">
                  {percentage ? percentage : ""}
                </p>
              </div>
              <p className="text-xs font-normal text-foreground/60">
                {minInfo ? minInfo : ""}
              </p>
            </div>
          )}
        </div>
      </div>
    </CardsContainer>
  );
}

export default AnalyticsCard;
