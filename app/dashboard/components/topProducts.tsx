'use client'
import React from 'react'
import ProductCharts from './charts/productchart'
import { RxDotFilled } from 'react-icons/rx';
const TopProducts = () => {
  return (
    <div className="flex flex-col gap-21 px-6 pt-6 pb-0 bg-white rounded-[20px]">
      <div className="flex flex-row justify-between">
        <p className="text-[18px] font-[700]">Top Products</p>
        <p className="text-[12px] text-[#858585]">May - June 2021</p>
      </div>
      <div className="flex flex-row justify-around">
        <ProductCharts />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <RxDotFilled color="#98D89E" size={20} />
            <p className="text-[14px] font-[700]">Basic Test</p>
          </div>
          <p className="text-[12px] text-[#858585] ml-6">55%</p>
          <div className="flex flex-row gap-1">
            <RxDotFilled color="#F6DC7D" size={20} />
            <p className="text-[14px] font-[700]">Custom Short Pants</p>
          </div>
          <p className="text-[12px] text-[#858585] ml-6">31%</p>
          <div className="flex flex-row gap-1">
            <RxDotFilled color="#EE8484" size={20} />
            <p className="text-[14px] font-[700]">Super Hoodies</p>
          </div>
          <p className="text-[12px] text-[#858585] ml-6">14%</p>
        </div>
      </div>
    </div>
  );
}

export default TopProducts