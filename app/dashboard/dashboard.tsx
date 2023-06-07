'use client'
import React from 'react'
import Header from './components/header'
import DetailCards from './components/detailCards'
import Activity from './components/activity'
import TopProducts from './components/topProducts'
import Schedule from './components/schedule'
const DashboardContent = () => {
  return (
    <div>
      <div><Header/></div>
    <div  className='grid grid-rows-6'>
      <div className='row-span-1'><DetailCards/></div>
      <div className='row-span-3'><Activity/></div>
      <div className='row-span-2'><TopProducts/></div>
    </div>
    </div>
  )
}

export default DashboardContent