"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarTab } from "./Helper";
import { PulseIcon } from "./Icon";

const SideBar = () => {
  return (
    <div className="sm:min-w-56 lg:min-w-[295px]  pt-4 sm:pt-6 sm:pb-10 sm:bg-white min-h-screen sm:flex justify-between flex-col">
      <div>
        <Link href="/" className="hidden sm:block">
          <Image
            className="mx-auto"
            src="/assets/images/png/logo.webp"
            width={200}
            height={102}
            alt="logo"
          />
        </Link>
        <div className="mt-2 bg-white rounded-b-xl max-sm:fixed bottom-0 left-0 right-0 z-10">
          <div className=" flex flex-row sm:flex-col">
            {SidebarTab.map((obj, index) => (
              <Link
                key={index}
                href={"/"}
                className="bg-white px-[5.5px] sm:px-8 py-3 sm:mt-4 w-full flex justify-start flex-col sm:flex-row items-center gap-[6px] sm:gap-2 group hover:bg-cream transition-all ease-linear duration-300 hover:text-orange relative before:absolute before:w-full before:h-1 sm:before:w-1 sm:before:h-full before:right-0 before:top-0 before:bg-transparent before:transition-all before:duration-300 before:ease-linear  sm:before:rounded-lg before:hover:bg-orange "
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
          <span className="sm:hidden block bg-cool-silver h-[5px] w-[135px] mx-auto rounded-[100px] mt-4 mb-2"></span>
        </div>
      </div>
      <div className="bg-white sm:bg-mist-gray rounded-xl border-dashed border-neutral-gray mx-2 sm:mx-4 lg:mx-8 py-5 md:py-[30px] px-2.5 hidden sm:flex flex-col items-center hover:shadow-cardShadow transition-all duration-300 ease-linear cursor-pointer">
        <div className="bg-orange rounded-[39px] w-10 h-10 flex justify-center items-center mx-auto">
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
    </div>
  );
};

export default SideBar;
