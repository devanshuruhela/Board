import React from "react";
import Header from "./components/header";
import DetailCards from "./components/detailCards";
import Activity from "./components/activity";
import TopProducts from "./components/topProducts";
import Schedule from "./components/schedule";

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
