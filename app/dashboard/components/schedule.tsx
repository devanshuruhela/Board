import React from 'react'

const Schedule = () => {
  return (
    <div className="flex flex-col gap-2 p-6  bg-white rounded-[20px]">
      <div className="flex flex-row justify-between">
        <p className="text-[18px] font-[700]">Today’s schedule</p>
        <p className="text-[#858585] text-[12px]">See All &rarr;</p>
      </div>
      <div className="flex items-center">
        <div className="h-20 mr-2 border-[#9BDD7C] border-l-[5px]" />
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-700 text-[#666666]">
            Meeting with suppliers from Kuta Bali
          </p>
          <p className="text-[12px] text-[#999999]">14.00-15.00</p>
          <p className="text-[12px] text-[#999999]">
            at Sunset Road, Kuta, Bali{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-20 mr-2 border-[#6972C3] border-l-[5px]" />
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-700 text-[#666666]">
            Check operation at Giga Factory 1
          </p>
          <p className="text-[12px] text-[#999999]">18.00-20.00</p>
          <p className="text-[12px] text-[#999999]">at Central Jakarta </p>
        </div>
      </div>
    </div>
  );
}

export default Schedule