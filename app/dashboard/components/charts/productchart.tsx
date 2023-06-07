'use client'
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";



const COLORS = ["#98D89E" , "#F6DC7D","#EE8484"];



const ProductCharts =()=> {


 const data = [
   { name: "Basic Tees", value: 550 },
   { name: "Custom Short Pants", value: 310 },
   { name: "Super Hoodies", value: 140 },
 ];
    return (
      // <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
        
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      // </ResponsiveContainer>
    );
  }

export default ProductCharts