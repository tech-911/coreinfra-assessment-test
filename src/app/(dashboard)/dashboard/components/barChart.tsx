"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "May",
    uv: 55,
    pv: 10,
  },
  {
    name: "Jun",
    uv: 72,
    pv: 22,
  },
  {
    name: "Jul",
    uv: 32,
    pv: 7,
  },
  {
    name: "Aug",
    uv: 60,
    pv: 10,
  },
  {
    name: "Sep",
    uv: 50,
    pv: 12,
  },
  {
    name: "Oct",
    uv: 80,
    pv: 18,
  },
  {
    name: "Nov",
    uv: 78,
    pv: 9,
  },
];

function BarChartComponent() {
  return (
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            //   strokeDasharray="3 3"
            opacity={0.5}
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            //   angle={-45}
            textAnchor="middle"
            interval={0}
            axisLine={{ stroke: "transparent" }}
            tickLine={false}
          />
          <YAxis
            axisLine={{ stroke: "transparent" }}
            domain={[0, 100]}
            // tickFormatter={(value) => `${value}k`}
            tickLine={false}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar
            dataKey="pv"
            barSize={40}
            radius={[0, 0, 0, 0]}
            stackId="a"
            fill="#014DAF"
          />
          <Bar
            dataKey="uv"
            barSize={40}
            radius={[8, 8, 0, 0]}
            stackId="a"
            fill="#CCE2FF"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
