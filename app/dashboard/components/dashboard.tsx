'use client'
import React from "react";
import Header from "./header";
import DetailCards from "./detailCards";
import Activity from "./activity";
import TopProducts from "./topProducts";
import Schedule from "./schedule";

const DashboardContent = () => {
  return (
    <div className="ml-5">
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-5">
        <div >
          <DetailCards />
        </div>
        <div>
          <Activity />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TopProducts />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
