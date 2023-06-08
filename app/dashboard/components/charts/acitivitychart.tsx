'use client'
import React, { useEffect, useState } from "react";
import "dotenv/config";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const ActivityChart = () => {
  const [data, setData] = useState([]);
 const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_KEY}/api/activity`
        );
        
        
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  useEffect(() => {
   

    fetchData();
  }, []);

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
