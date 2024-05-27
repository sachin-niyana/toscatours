import Image from "next/image";
import React, { useState } from "react";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="bg-white md:p-16 sm:p-10 p-5 rounded-3xl sm:min-w-[488px] min-w-[360px]">
      <Image
        width={360}
        height={182}
        src="/assets/images/png/logo.png"
        alt="logo"
      />
      <p className="font-semibold text-xl text-black pt-6 !leading-[140%">
        Schön, dich wiederzusehen
      </p>
      <div className="mt-6">
        <p className="font-normal text-xs-11 text-dark-gray">Login</p>
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full px-4 py-3 mt-2 bg-mist-gray border-[0.5px] outline-none border-neutral-gray rounded-full placeholder-light-gray text-black font-medium text-base !leading-[160%]"
        />
        <p className="font-normal text-xs-11 mt-4 text-dark-gray">Password</p>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mt-2 bg-mist-gray border-[0.5px] outline-none border-neutral-gray rounded-full placeholder-light-gray text-black font-medium text-base !leading-[160%]"
        />
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div
              onClick={toggleCheck}
              className={`w-10 h-6 flex items-center bg-gray-300 p-1 cursor-pointer transition-colors bg-mist-gray border-[0.5px] border-neutral-gray rounded-full ${
                isChecked ? "bg-orange" : ""
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  isChecked ? "translate-x-4" : ""
                }`}
              />
            </div>
            <p className="font-normal text-light-black text-xs">Remember me</p>
          </div>
          <p className="text-orange text-xs font-normal">Forgot password?</p>
        </div>
        <button className="bg-neutral-gray hover:bg-orange hover:text-white transition-all ease-linear duration-300 rounded-full w-full py-2 font-medium text-xl mt-6 !leading-normal">
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
