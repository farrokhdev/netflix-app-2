import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { colors, H4 } from "ConstComponents";
import { ChartSec } from "./ChartStyle";

export const ChartBox = ({ data, title }) => {
  return (
    <ChartSec>
      <H4>{title}</H4>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke={colors.primary} />
          <Line
            type="monotone"
            dataKey="userPerMonth"
            stroke={colors.secondary}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </ChartSec>
  );
};
