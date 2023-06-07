import React from 'react'
import ActivityChart from './charts/acitivitychart'
import { RxDotFilled } from "react-icons/rx";
const Activity = () => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-white rounded-[20px] -mt-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-black font-[700] text-[18px]">Activities</p>
          <p className="text-[#858585] text-[14px]">May - June 2021</p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-1">
            <RxDotFilled color="#E9A0A0" size={20}/>
            <p className='text-[14px]'>Guest</p>
          </div>
          <div className="flex flex-row gap-1">
            <RxDotFilled color="#9BDD7C" size={20}/>
            <p className='text-[14px]'>User</p>
          </div>
        </div>
      </div>
      <ActivityChart />
    </div>
  );
}

export default Activity