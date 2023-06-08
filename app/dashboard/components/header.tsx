'use client'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import LogoutPopup from './logout'

const Header = () => {
 
 
  
  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-black font-[700] text-[24px]">Dashboard</p>
        <div className="flex flex-row gap-5">
          <div className="flex items-center bg-white ml-5 rounded-[10px] shadow-sm">
            <input
              type="text"
              className="w-full px-3 py-1 text-gray-700 rounded-[10px]  focus:outline-none"
              placeholder="Search..."
            />
            <button className="flex-shrink-0 px-4 py-1 text-gray-500 rounded-full ">
              <AiOutlineSearch />
            </button>
          </div>
          <div className='mt-2'>
            <BiBell  size={15} />
          </div>
         <LogoutPopup/>
        </div>
      </div>
    </>
  );
}

export default Header