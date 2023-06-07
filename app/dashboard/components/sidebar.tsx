'use client'
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {RiPieChartLine} from 'react-icons/ri'
import {FaTags} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {BiUserCircle} from 'react-icons/bi'

import {MdSchedule} from 'react-icons/md'
function SideNavbar() {
  return (
    <div className="bg-[#F5F5F5]">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute inline-flex items-center justify-center p-2 text-gray-800 rounded-md top-4 right-4 peer hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block w-6 h-6 md:hidden"
            aria-hidden="true"
          />
        </Disclosure.Button>
       
        <div className="fixed top-0 z-20 w-1/2 h-[90vh] pl-2 pt-5 pr-5 my-10 ml-10 mr-1 duration-200 ease-out delay-150 bg-black -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition  rounded-[30px]">
       <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-start item-center">
            <p className="w-full pb-2 pl-4 font-[700] text-[36px]  text-white cursor-pointer">
              Board.
            </p> 
            <div className="pb-4 my-4 ">
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-white group hover:shadow-lg">
                <RiPieChartLine className="text-[16px] text-white group-hover:text-black " />
                <h3 className="text-[16px] font-[700] text-white group-hover:text-black ">
                  Dashboard
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-white group hover:shadow-lg">
                <FaTags className="text-[16px] text-white group-hover:text-black " />
                <h3 className="text-[16px]  text-white group-hover:text-black ">
                  Transactions
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-white group hover:shadow-lg">
                <MdSchedule className="text-[16px] text-white group-hover:text-black " />
                <h3 className="text-[16px]  text-white group-hover:text-black ">
                  Schedules
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-white group hover:shadow-lg">
                <BiUserCircle className="text-[16px] text-white group-hover:text-black " />
                <h3 className="text-[16px] text-white group-hover:text-black ">
                  Users
                </h3>
              </div>
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded-md cursor-pointer hover:bg-white group hover:shadow-lg">
                <FiSettings className="text-[16px] text-white group-hover:text-black " />
                <h3 className="text-[16px]  text-white group-hover:text-black ">
                  Settings
                </h3>
              </div>
            </div><div className="flex flex-col gap-2 mt-[10rem]  ml-5">
          <p className="text-white text-[14px] cursor-pointer">Help</p>
          <p className="text-white text-[14px] cursor-pointer">Contact Us</p>
        </div>
          </div>
        
         
     
       
        </div>   </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;