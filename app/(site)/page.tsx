import LoginForm from "./components/LoginForm";

export default function Auth() {
  return (
    <div className="flex flex-col h-screen md:flex-row bg-[#F5F5F5]">
      <div className="flex items-center justify-center w-full md:w-[35%] bg-black">
        <p className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Board.
        </p>
      </div>
      <div className="w-full md:w-[65%] flex items-center justify-center flex-col mt-10 md:mt-0">
        <LoginForm />
        <div className="flex flex-row gap-2 mt-5">
          <p className="text-[12px] text-[#858585]">Don’t have an account?</p>
          <p className="text-[12px] cursor-pointer text-[#346BD4]">
            {" "}
            Register here
          </p>
        </div>
      </div>
    </div>
  );
}



