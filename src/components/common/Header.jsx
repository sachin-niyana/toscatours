"use client";
import React, { useState } from "react";
import { ArrowIcon, MailIcon, NotificationIcon } from "./Icon";
import Link from "next/link";
import Image from "next/image";
import { SidebarDropdown } from "./Helper";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const [isSidebarDropDown, setIsSidebarDropDown] = useState(false);

  const openDropdown = (e) => {
    if (e === 2) {
      setIsSidebarDropDown(true);
    }
  };
  const closeBtn = () => setIsSidebarDropDown(false);

  return (
    <div className="sm:bg-white py-[19px] px-6 lg:px-12 border border-mist-gray w-full flex justify-between items-center ">
      <div className="hidden sm:block">
        <h2 className="font-bold text-2xl !leading-[144%] text-black">
          Hi Stéphane
        </h2>
        <p className="font-medium text-base text-dark-gray !leading-[115%] ">
          Lass uns heute den Umsatz überprüfen!
        </p>
      </div>
      <Link href="/" className="sm:hidden">
        <Image
          src="/assets/images/png/logo.webp"
          width={138}
          height={70}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-4">
        <Link rel="stylesheet" className="group" href="/">
          <MailIcon />
        </Link>
        <Link rel="stylesheet" className="group" href="/">
          <NotificationIcon />
        </Link>
        <span className="bg-mist-gray w-[1px] h-10 hidden md:block"></span>
        <div
          onClick={toggleDropdown}
          className="relative duration-300 ease-linear flex items-center gap-4 cursor-pointer"
        >
          <Image
            width={48}
            height={48}
            src="/assets/images/png/ProfileImg.webp"
            alt="profile Img"
          />

          <div className="hidden lg:flex flex-col ">
            <span className="text-2xl font-bold leading-[144%] text-black">
              Stéphane{" "}
            </span>
            <span className="text-base font-normal leading-normal text-dark-gray">
              Geschäftsführer
            </span>
          </div>
          <span
            className={`${
              dropdownVisible && "rotate-180"
            } group hidden lg:block duration-300`}
          >
            <ArrowIcon />
          </span>
          <div
            className={`absolute mt-2 w-64 p-4 rounded-3xl bg-white shadow-lg transition-opacity duration-300 ease-linear top-12 left-0 right-0 ${
              dropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {SidebarDropdown.map((obj, index) => (
              <div key={index}>
                <Link
                  href={obj.to ? obj.to : "#"}
                  onClick={() => openDropdown(obj.e)}
                  className="mx-2 py-[13.5px] flex justify-start group items-center gap-2 group transition-all ease-linear duration-300"
                >
                  <span>{obj.icon}</span>
                  <span className="font-medium text-sm leading-normal text-black group-hover:text-red transition-all ease-linear duration-300">
                    {obj.title}
                  </span>
                </Link>
              </div>
            ))}
            <div className="pt-2 mt-2 flex flex-col border-t border-t-mist-gray">
              <Link
                href=""
                className="font-medium text-sm leading-normal text-black transition-all ease-linear duration-300 hover:text-orange mx-2 py-[13.5px]"
              >
                Privacy Policy
              </Link>

              <Link
                href=""
                className="font-medium text-sm text-black leading-normal transition-all ease-linear duration-300 hover:text-orange mx-2 py-[13.5px]"
              >
                About
              </Link>
            </div>
          </div>
        </div>
        {isSidebarDropDown && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-96 p-8 rounded-md shadow-lg relative flex flex-col ">
              <button
                onClick={closeBtn}
                className="absolute top-2 right-2 text-white bg-red rounded py-1 px-2"
              >
                Close
              </button>
              <div className="mx-auto pt-4">
                <Image
                  width={48}
                  height={48}
                  src="/assets/images/png/ProfileImg.webp"
                  alt="Profile Img"
                />
              </div>
              <h2 className="text-2xl font-bold leading-[144%] text-black pt-2 text-center">
                Stéphane
              </h2>
              <p className="text-base font-normal text-dark-gray leading-normal text-center">
                Geschäftsführer
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
