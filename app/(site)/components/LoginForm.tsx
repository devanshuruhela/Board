"use client"
import React from 'react'
import SocialButton from './SocialButtons'
import {FcGoogle } from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'
const LoginForm = () => {
   const onClick = () =>
   {

   }
  return (
    <div className="flex flex-col justify-start">
      <div className='flex flex-col gap-2'>
      <p className="font-[700] text-black text-[36px] leading-[44px]">
        Sign In
      </p>
      <p className="font-[400] text-black text-[16px] leading-[19px]">
        Sign in to your account
      </p></div>
      <div className="flex flex-row w-[400px]  gap-4 my-5">
        <SocialButton
          icon={FcGoogle}
          text={"Sign in with Google"}
          onClick={onClick}
        ></SocialButton>
        <SocialButton
          icon={FaApple}
          text={"Sign in with Apple"}
          onClick={onClick}
        ></SocialButton>
      </div>

      <div className="bg-white  rounded-[20px]">
        <div className="p-5">
          <form>
            <div className="flex flex-col content-center justify-center">
              <div className="flex flex-col gap-2 m-5">
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
              <div className="flex flex-col gap-2 m-5">
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
                />
              </div>
              <p className="text-[12px] font-[400] text-[#346BD4] ml-5 mb-5 cursor-pointer">
                Forgot password?
              </p>
              <button
                type="submit"
                className="bg-[#000000] text-[16px] rounded-[10px] px-3 py-2  mx-5  mb-5 text-white"
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