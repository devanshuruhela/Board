'use client'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from './components/sidebar'
import React from 'react'
import DashboardContent from './components/dashboard'
import Link from 'next/link'
import Loader from '../components/Loader'

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
  
   if (session?.status === "unauthenticated") {
     router.push("/");
   }

   if(session?.status === "loading")
   {
    return(
      <div><Loader/></div>
    )
   }
  
}

export default Dashboard

export const getServerSideProps = async(context:any) =>
{
  
  const session =await getSession(context);

  if(!session)
  {
    return {
      redirect: {
 
        destination: "/",
      },
    };
  }
  return{
    props:{session}
  }
}

