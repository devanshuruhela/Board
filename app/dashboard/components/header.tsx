'use client'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Header = () => {
  const session = useSession();
  console.log('hi', session);
  
  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-black font-[700] text-[24px]">Dashboard</p>
        <div className="flex flex-row gap-5">
          <div className="flex items-center bg-white rounded-[10px] shadow-sm">
            <input
              type="text"
              className="w-full px-4 py-1 text-gray-700 rounded-full focus:outline-none"
              placeholder="Search..."
            />
            <button className="flex-shrink-0 px-4 py-1 text-gray-500 rounded-full ">
              <AiOutlineSearch />
            </button>
          </div>
          <div className='mt-2'>
            <BiBell  size={15} />
          </div>
          <div className="overflow-hidden rounded-full">
            <Image
              src={
                "https://lh3.googleusercontent.com/a/AAcHTtfbci1LdYQBjow8ucixE56ViIoLtRAi1czmMyh1=s96-c"
              }
              alt="Profile"
              width={15}
              height={15}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header