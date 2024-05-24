"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarTab } from "./Helper";

const SIdeBar = () => {
  return (
    <div className="max-w-[295px] pt-6 pb-10">
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
        {SidebarTab.map((object, index) => (
          <Link
            key={index}
            href={"/"}
            className="px-8 py-3 mt-4 flex justify-start items-center gap-2 group hover:bg-cream transition-all ease-linear duration-300 hover:text-orange relative before:absolute before:w-1 before:h-full before:right-0 before:top-0 before:bg-white before:transition-all before:duration-300 before:ease-linear before:rounded-lg before:hover:bg-orange "
          >
            <span>{object.icon}</span>
            <span className="font-medium text-sm leading-normal">
              {object.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SIdeBar;
