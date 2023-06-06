'use client'
import { getSession, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from './components/sidebar'
import React from 'react'

const Dashboard = () => {
  const session  = useSession()
  const router  = useRouter()
  if(session?.status === 'authenticated')
  {return (
    // <div>Dashboard <button onClick={()=>signOut()}>Logout</button></div>
    <Sidebar/>
    
  )}
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