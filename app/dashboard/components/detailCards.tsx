'use client'
import React from 'react'
import DetailCard from './DetailCard'
import {cardData} from '../../data/carddata'

const DetailCards = () => {
  
  return (
    <div>
      <div className="flex flex-col gap-5 mt-5 md:grid md:grid-cols-4 md:flex-row">
        {cardData.map((card: any) => (
          <DetailCard
            key={card.id}
            title={card.title}
            number={card.numbers}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}

export default DetailCards