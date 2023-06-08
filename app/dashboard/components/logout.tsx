'use client';

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const LogoutPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const imageUrl = "https://lh3.googleusercontent.com/a/AAcHTtfbci1LdYQBjow8ucixE56ViIoLtRAi1czmMyh1=s96-c"
  
  const session = useSession();

  
  
  
  const handleLogout = () => {
    signOut()
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-full"
        onClick={() => setShowPopup(true)}
      >
        <Image
          src={session?.data?.user?.image || imageUrl}
          alt="Profile"
          width={20}
          height={20}
          className="object-cover w-full h-full"
        />
      </div>

      {showPopup && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="max-w-md p-6 mx-auto bg-white rounded-[20px]">
              <p className="mb-4">Are you sure you want to logout?</p>
              <div className="flex justify-end">
                <button
                  className="px-3 py-1 mr-2 font-bold text-white bg-red-500 rounded-[10px] hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="px-3 py-1 font-bold text-gray-800 bg-gray-300 rounded-[10px] hover:bg-gray-400"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LogoutPopup;
