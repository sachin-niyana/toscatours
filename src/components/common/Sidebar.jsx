"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarTab } from "./Helper";
import { PulseIcon } from "./Icon";
import Header from "./Header";

const SIdeBar = () => {
  return (
    <div className="bg-mist-gray min-h-screen flex  items-start">
      <div className="w-[295px] pt-6 pb-10 bg-white min-h-screen flex justify-between flex-col">
        <div>
          {" "}
          <Link href="/">
            <Image
              className=" mx-auto"
              src="/assets/images/common/webp/logo.webp"
              width={200}
              height={102}
              alt="logo"
            />
          </Link>
          <div className="pt-2">
            {SidebarTab.map((obj, index) => (
              <Link
                key={index}
                href={"/"}
                className="px-8 py-3 mt-4 flex justify-start items-center gap-2 group hover:bg-cream transition-all ease-linear duration-300 hover:text-orange relative before:absolute before:w-1 before:h-full before:right-0 before:top-0 before:bg-white before:transition-all before:duration-300 before:ease-linear before:rounded-lg before:hover:bg-orange "
              >
                <span>{obj.icon}</span>
                <span className="font-medium text-sm leading-normal">
                  {obj.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-mist-gray rounded-xl border-dashed border-neutral-gray mx-8 py-[30px] px-2.5 flex flex-col items-center">
          <div className="bg-orange rounded-[39px] w-10 h-10  flex justify-center items-center mx-auto">
            <PulseIcon />
          </div>
          <h3 className="font-semibold text-sm-13 text-center py-1">
            Daten importieren
          </h3>
          <div className="font-medium text-xxs leading-[144%] text-light-gray flex items-center gap-1">
            <Link href={"/"} className="text-orange underline">
              Datei aussuchen
            </Link>
            oder hierher ziehen.
          </div>
        </div>
      </div>{" "}
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
};

export default SIdeBar;
