import React from "react";
import Header from "./components/header";
import DetailCards from "./components/detailCards";
import Activity from "./components/activity";
import TopProducts from "./components/topProducts";
import Schedule from "./components/schedule";

const DashboardContent = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid grid-rows-6 gap-5">
        <div className="row-span-1">
          <DetailCards />
        </div>
        <div className="row-span-2">
          <Activity />
        </div>
        <div className="row-span-2">
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
