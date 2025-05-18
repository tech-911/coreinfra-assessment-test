"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 900 },
  { name: "Group C", value: 80 },
  { name: "Group D", value: 50 },
  { name: "Group E", value: 40 },
];
const COLORS = ["#FFBA24", "#01A4AF", "#014DAF", "#8020E7", "#FF4457"];
function PieChartComponent() {

  return (
    <div className="relative h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            innerRadius={85}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
            cornerRadius={8}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-xs text-foreground/50 font-medium">Total Cards</p>
        <p className="text-2xl font-medium text-foreground">2,450</p>
      </div>
    </div>
  );
}

export default PieChartComponent;
