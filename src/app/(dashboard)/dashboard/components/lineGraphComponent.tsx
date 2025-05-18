"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: " Mon ",
    uv: 50,
  },
  {
    name: " Tue ",
    uv: 36,
  },
  {
    name: " Wed ",
    uv: 39,
  },
  {
    name: " Thu ",
    uv: 38,
  },
  {
    name: " Fri ",
    uv: 58,
  },
  {
    name: " Sat ",
    uv: 26,
  },
  {
    name: " Sun ",
    uv: 80,
  },
];

function LineGraphComponent() {
  return (
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            opacity={0.5}

            // strokeDasharray="3 3"
          />
          <XAxis
            dataKey="name"
            //   angle={-45}
            textAnchor="middle"
            interval={0}
            axisLine={{ stroke: "transparent" }}
            tickLine={false}
            tick={{ dy: 8 }}
          />
          <YAxis
            axisLine={{ stroke: "transparent" }}
            domain={[0, 100]}
            // tickFormatter={(value) => `${value}k`}
            tickLine={false}
            ticks={[0, 20, 40, 60, 80, 100]}
            tick={{ dx: -6 }}
          />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#4DAF01"
            strokeWidth={2}
            // activeDot={{ r: 8 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraphComponent;
