'use client'
import React from "react";

interface DetailCardProps {
  title: string;
  number: string;
  icon: any;
  color: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  title,
  number,
  icon,
  color,
}) => {
  return (
    <>
      <div
        className="flex flex-col p-3 rounded-[20px]"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-row justify-end">{icon}</div>
        <div className="flex flex-col">
          <p className="text-sm break-words md:text-base">{title}</p>
          <p className="text-lg font-bold break-words md:text-2xl">{number}</p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
