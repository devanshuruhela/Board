'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from './components/sidebar'
import React from 'react'
import DashboardContent from './dashboard'

const Dashboard = () => {
  const session  = useSession()
  const router  = useRouter()
  if(session?.status === 'authenticated')
  {return (
    <div className="bg-[#F5F5F5] ">
      
      <div className="grid min-h-screen grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 mt-10 ml-5 mr-10">
          <DashboardContent />
        </div>
      </div>
    </div>
  );}
  else{
    return(
    
      router.push('/')
    )
  }
  
}

export default Dashboard

