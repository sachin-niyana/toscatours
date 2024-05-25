"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SidebarTab, SidebarDropdown } from "./Helper";
import { PulseIcon, ArrowIcon, MailIcon, NotificationIcon } from "./Icon";
import Header from "./Header";

const SIdeBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
  return (
    <div className="overflow-hidden">
      <div className="bg-mist-gray min-h-screen flex items-start">
        <div className="max-sm:w-full sm:w-52 md:!w-[295px] pt-6 pb-10 sm:bg-white min-h-screen flex justify-between flex-col">
          <div className=" flex sm:hidden justify-between ">
            <Link href="/" className="sm:hidden">
              <Image
                src="/assets/images/common/webp/logo.webp"
                width={200}
                height={102}
                alt="logo"
              />
            </Link>
            <div className=" flex items-center gap-4">
              <Link rel="stylesheet" href="/">
                <MailIcon />
              </Link>
              <Link rel="stylesheet" href="/" onClick={toggleNotification}>
                <NotificationIcon />
                {isNotificationOpen && (
                  <div className="absolute top-10 right-0 w-64 p-4 rounded-md bg-white shadow-lg">
                    <p className="text-sm">You are can notification!</p>
                  </div>
                )}
              </Link>
              <span className="bg-mist-gray w-[1px] h-10 hidden md:block "></span>
              <Link
                href={"/"}
                className="relative link flex items-center gap-4"
              >
                <span>
                  {" "}
                  <Image
                    width={48}
                    height={48}
                    src="/assets/images/common/webp/ProfileImg.webp"
                  />
                </span>
                <span className="hidden lg:flex flex-col ">
                  <span className="text-2xl font-bold leading-[144%]">
                    Stéphane{" "}
                  </span>
                  <span className="text-base font-normal">Geschäftsführer</span>
                </span>
                <span className="group hidden lg:block ">
                  <ArrowIcon />
                </span>
                <div className="absolute right-[-310px] mt-2 w-64 p-4 rounded-3xl bg-white shadow-lg transition-all duration-300 ease-in-out top-14 dropdown-content">
                  {SidebarDropdown.map((obj, index) => (
                    <Link
                      key={index}
                      href={"/"}
                      onClick={openModal}
                      className="mx-2 py-[13.5px] flex justify-start group items-center gap-2 group transition-all ease-linear duration-300 hover:text-red "
                    >
                      <span>{obj.icon}</span>
                      <span className="font-medium text-sm leading-normal">
                        {obj.title}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 flex flex-col border-t border-t-mist-gray">
                    <Link
                      href={"/"}
                      className="font-medium text-sm leading-normal transition-all ease-linear duration-300 hover:text-orange mx-2 py-[13.5px]"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href={"/"}
                      className="font-medium text-sm leading-normal transition-all ease-linear duration-300 hover:text-orange mx-2 py-[13.5px]"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </Link>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white w-56 sm:w-96 p-8 rounded-md shadow-lg relative flex flex-col ">
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 text-white bg-red rounded py-1 px-2"
                    >
                      Close
                    </button>
                    <div className="mx-auto pt-4">
                      {" "}
                      <Image
                        width={48}
                        height={48}
                        src="/assets/images/common/webp/ProfileImg.webp"
                        alt="Profile Img"
                      />
                    </div>
                    <h2 className="text-2xl font-bold leading-[144%] pt-2 text-center">
                      Stéphane{" "}
                    </h2>
                    <p className="text-base font-normal text-center">
                      Geschäftsführer
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="sm:hidden">
            <h2 className="font-bold text-2xl leading-">Hi Stéphane</h2>
            <p className="font-medium text-base text-dark-gray !leading-[115%] ">
              Lass uns heute den Umsatz überprüfen!
            </p>
          </div>
          <div>
            <Link href="/" className="hidden sm:block">
              <Image
                className=" mx-auto"
                src="/assets/images/common/webp/logo.webp"
                width={200}
                height={102}
                alt="logo"
              />
            </Link>
            <div className="pt-2 flex flex-row sm:flex-col ">
              {SidebarTab.map((obj, index) => (
                <Link
                  key={index}
                  href={"/"}
                  className="px-[5.5px] sm:px-8 py-3 mt-4 w-full flex justify-start flex-col sm:flex-row items-center gap-[6px] sm:gap-2 group hover:bg-cream transition-all ease-linear duration-300 hover:text-orange relative before:absolute before:w-full before:h-1 sm:before:w-1 sm:before:h-full before:right-0 before:top-0 before:bg-white before:transition-all before:duration-300 before:ease-linear  sm:before:rounded-lg before:hover:bg-orange "
                >
                  <span>{obj.icon}</span>
                  <span className="font-medium text-xs sm:text-sm leading-normal hidden sm:block">
                    {obj.title}
                  </span>
                  <span className="font-medium text-xs sm:text-sm leading-normal sm:hidden">
                    {obj.titleSmallscreen}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-mist-gray rounded-xl border-dashed border-neutral-gray mx-2 sm:mx-4 md:mx-8 py-[30px] px-2.5 hidden sm:flex flex-col items-center">
            <div className="bg-orange rounded-[39px] w-10 h-10  flex justify-center items-center mx-auto">
              <PulseIcon />
            </div>
            <h3 className="font-semibold text-sm-13 text-center py-1">
              Daten importieren
            </h3>
            <div className="font-medium text-xxs leading-[144%] text-light-gray text-center">
              <Link href={"/"} className="text-orange underline pe-1">
                Datei aussuchen
              </Link>
              oder hierher ziehen.
            </div>
          </div>
        </div>{" "}
        <div className="hidden sm:block sm:w-11/12">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default SIdeBar;
