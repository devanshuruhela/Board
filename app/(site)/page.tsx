import LoginForm from "./components/LoginForm";

export default function Auth() {
  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-[35%]  bg-black">
        <p className="text-[72px] text-white font-[700] leading-[88px]">
          Board.
        </p>
      </div>
      <div className="bg-gray-300 w-[65%] flex items-center justify-center flex-col">
        <LoginForm />
        <div className="flex flex-row gap-2 mt-5">
          <p className="text-[16px] text-[#858585]">
            Don’t have an account?
          </p>
          <p className="text-[16px] cursor-pointer text-[#346BD4]"> Register here</p>
        </div>
      </div>
    </div>
  );
}