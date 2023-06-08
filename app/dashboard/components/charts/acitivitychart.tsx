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

const ActivityChart = () => {
  const data = [
    {
      name: "Week 1",
      guest: 200,
      user: 100,
    },
    {
      name: "Week 2",
      guest: 400,
      user: 430,
    },
    {
      name: "Week 3",
      guest: 200,
      user: 150,
    },
    {
      name: "Week 4",
      guest: 220,
      user: 180,
    },
  ];

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="user"
            stroke="#9BDD7C"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="guest" stroke="#E9A0A0" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
