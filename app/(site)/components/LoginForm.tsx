"use client";

import React, { useEffect, useState } from 'react'
import SocialButton from './SocialButtons'
import {FcGoogle } from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'

import {useSession , signIn , signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";

const LoginForm = () => { 
  
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
    const socialHandler= (action: string) => {
      setIsLoading(true);

      signIn(action, { redirect: false })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok) {
            router.push("/dashboard");
          }
        })
        .finally(() => setIsLoading(false));
    }; 
    
   useEffect(() => {
     if (session?.status === "authenticated") {
       router.push("/dashboard");
     }
   }, [session?.status, router]);
  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-col gap-2">
        <p className="font-[700] text-black text-[36px] leading-[44px]">
          Sign In
        </p>
        <p className="font-[400] text-black text-[16px] leading-[19px]">
          Sign in to your account
        </p>
      </div>
      <div className="flex flex-row w-[400px]  gap-5 my-5">
        <SocialButton
          icon={FcGoogle}
          text={"Sign in with Google"}
          onClick={()=>socialHandler('google')}
        ></SocialButton>
        <SocialButton
          icon={FaApple}
          text={"Sign in with Apple"}
          onClick={() => socialHandler('apple')}
        ></SocialButton>
      </div>

      <div className="bg-white  rounded-[20px]">
        <div className="p-5">
          <form>
            <div className="flex flex-col content-center justify-center">
              <div className="flex flex-col gap-2 m-3">
                <label
                  htmlFor="email"
                  className="text-[16px] outline-none border-none leading-[19.2px]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-[#F5F5F5] rounded-[10px] px-5 py-2"
                 
                />
              </div>
              <div className="flex flex-col gap-2 m-3">
                <label
                  htmlFor="password"
                  className="text-[16px] outline-none border-none leading-[19.2px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-[#F5F5F5] rounded-[10px] px-5 py-2"
                  placeholder=""
                />
              </div>
              <p className="text-[12px] font-[400] text-[#346BD4] ml-5 mb-5 cursor-pointer">
                Forgot password?
              </p>
              <button
                type="submit"
                className="bg-[#000000] text-[16px] rounded-[10px] px-3 py-2  mx-4  mb-5 text-white hover:bg-gray-900"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm