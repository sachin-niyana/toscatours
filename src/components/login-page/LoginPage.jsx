import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CloseEyes, OpenEyes } from "../common/Icon";

// Define validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [toggleError, setToggleError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    if (toggleError) setToggleError(""); // Clear the error message if toggle changes
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    if (!isChecked) {
      setToggleError("You must enable the toggle to submit the form.");
      return;
    }

    console.log(data);
    // Handle form submission logic here
    reset(); // Reset the form data
    setIsChecked(false); // Turn off the toggle button
    setToggleError(""); // Clear the error message
  };

  return (
    <div className="bg-white md:p-16 sm:p-10 p-5 rounded-3xl sm:min-w-[488px] min-w-[360px]">
      <Image
        width={360}
        height={182}
        src="/assets/images/png/logo.png"
        alt="logo"
      />
      <p className="font-semibold text-xl text-black pt-6 !leading-[140%]">
        Schön, dich wiederzusehen
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <p className="font-normal text-xs-11 text-dark-gray leading-[100%]">
          Login
        </p>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email or phone number"
          {...register("email")}
          className="w-full px-4 py-3 mt-2 bg-mist-gray border-[0.5px] outline-none border-neutral-gray rounded-full placeholder-light-gray text-black font-medium text-base !leading-[160%]"
        />
        {errors.email && (
          <p className="text-red text-xs mt-1">{errors.email.message}</p>
        )}

        <p className="font-normal text-xs-11 mt-4 text-dark-gray leading-[100%]">
          Password
        </p>
        <div className="relative">
          <input
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password")}
            className="w-full px-4 py-3 mt-2 bg-mist-gray border-[0.5px] outline-none border-neutral-gray rounded-full placeholder-light-gray text-black font-medium text-base !leading-[160%]"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-[7px] text-gray-600"
          >
            {showPassword ? <OpenEyes /> : <CloseEyes />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red text-xs mt-1">{errors.password.message}</p>
        )}

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <div
              onClick={toggleCheck}
              className={`w-10 h-5 flex items-center bg-gray-300 p-[1.5px] cursor-pointer transition-colors bg-mist-gray border-[0.5px] border-neutral-gray rounded-full ${
                isChecked ? "bg-orange" : ""
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  isChecked ? "translate-x-[18px]" : ""
                }`}
              />
            </div>
            <p className="font-normal text-light-black text-xs">Remember me</p>
          </div>
          <Link href="/" className="text-orange text-xs font-normal">
            Forgot Password?
          </Link>
        </div>
        {toggleError && (
          <p className="text-red-500 text-xs mt-2 text-red">{toggleError}</p>
        )}
        <Link href="/dashboard">
          <button
            type="submit"
            className={`bg-neutral-gray transition-all ease-linear duration-300 rounded-full !w-full py-2 font-medium text-xl mt-6 !leading-normal ${
              isValid && isChecked
                ? "hover:bg-orange hover:text-white"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid || !isChecked}
          >
            Log in
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
