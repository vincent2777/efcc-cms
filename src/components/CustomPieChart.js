import { Box } from "@chakra-ui/react";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const CustomPieChart = ({ colors = ["#FFC34F", "#6e0d13"], data }) => {
  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 176;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#000000"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="hanging"
      >
        {`${(percent * 100).toFixed(0)}%`})
      </text>
    );
  };

  return (
    <Box
      as={ResponsiveContainer}
      sx={{
        "& .recharts-legend-item-text": {
          color: "black !important",
        },
      }}
      w={"100%"}
      height={"120% !important"}
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend
          wrapperStyle={{
            padding: "1rem 2rem 0",
            borderTop: "2px solid #E8E8E8",
            width: "100%",
          }}
          layout="vertical"
          iconType="rect"
          iconSize={20}
        />
      </PieChart>
    </Box>
  );
};

export default CustomPieChart;
