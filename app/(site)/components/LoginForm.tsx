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
    <div className="flex flex-col">
      <div className="flex flex-row w-[400px] justify-around gap-4 p-4">
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

      <div className="bg-white w-[400px] h-[400px] rounded-[20px]"></div>
    </div>
  );
}

export default LoginForm