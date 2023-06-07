import React from 'react'
import DetailCard from './DetailCard'
import {cardData} from '../../data/carddata'

const DetailCards = () => {
  
  return (
    <div>
      <div className='grid grid-cols-4 gap-8 mt-5'>
      {cardData.map((card:any) => (
      
        <DetailCard key={card.id}
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