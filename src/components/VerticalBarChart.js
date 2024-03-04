import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const VerticalBarChart = () => {
  const data = [
    { name: "Criminal Cases", value: 520 },
    { name: "Civil Cases", value: 450 },
    { name: "Asset Freezing Order", value: 673 },
    { name: "Remand Order", value: 223 },
    { name: "Court of Appeal", value: 420 },
    { name: "Supreme Court Cases", value: 330 },
  ];
  const colors = [
    "#FFC34F",
    "#FA8DFF",
    "#5BBDFF",
    "#FF565B",
    "#A4CFE9",
    "#63FF60",
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, left: -40, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <YAxis tick={false} tickLine={false} axisLine={false} type="number" />
        <XAxis
          tick={false}
          tickLine={false}
          axisLine={false}
          dataKey="name"
          type="category"
        />
        <Bar dataKey="value" fill="#8884d8" barSize={40}>
          <LabelList
            dataKey="name"
            position="inside"
            angle="-90"
            fill="#444448"
            fontWeight={"bold"}
            fontSize={"14px"}
          />
          {/* <LabelList dataKey="value" position="top" fill="8884d8" /> */}
          {colors.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} b />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalBarChart;
