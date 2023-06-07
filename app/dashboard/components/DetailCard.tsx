import React from "react";

interface DetailCardProps {
  
  title: string;
  number: string;
  icon: any;
  color:string;
}
const DetailCard: React.FC<DetailCardProps> = ({ title, number, icon , color }) => {

  return (
    <>
      <div className={`flex flex-col p-3  rounded-[20px]`} style={{backgroundColor:color}}>
        <div className="flex flex-row justify-end">{icon}</div>
        <div className="flex flex-col">
          <p className="text-[14px]">{title}</p>
          <p className="text-[24px] font-[700]">{number}</p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
