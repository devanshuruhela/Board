'use client'
import { getSession, signOut, useSession } from 'next-auth/react'
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
      {/* <button onClick={()=>signOut()}>Logout</button> */}
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

export const getServerSideProps = async(context:any) =>
{
  const session = await getSession(context)
  if(!session)
  {
    return{
      redirect:{
        destination:'/',
      }
    }
  }
  return{
    props:{session},
  }
}