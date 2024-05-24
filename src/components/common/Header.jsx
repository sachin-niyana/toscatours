import React from "react";
import { ArrowIcon, MailIcon, NotificationIcon } from "./Icon";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white py-[19px] border border-mist-gray w-full px-12 flex justify-between items-center h-full">
      <div className="">
        <h2 className="font-bold text-2xl leading-">Hi Stéphane</h2>
        <p className="font-medium text-base text-dark-gray !leading-[115%] ">
          Lass uns heute den Umsatz überprüfen!
        </p>
      </div>
      <div className=" flex items-center gap-4">
        <Link rel="stylesheet" href="/">
          <MailIcon />
        </Link>
        <Link rel="stylesheet" href="/">
          <NotificationIcon />
        </Link>
        <span className="h-full">|</span>
        <span>
          {" "}
          <Image
            width={48}
            height={48}
            src="/assets/images/common/webp/ProfileImg.webp"
          />
        </span>
        <Link href={"/"} className="flex justify-center flex-col ">
          <span className="text-2xl font-bold leading-[144%]">Stéphane </span>
          <span className="text-base font-normal">Geschäftsführer</span>
        </Link>
        <Link href={"/"} className="">
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
