import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <div className="pt-6">
        <Link href={"/"} className=""></Link>
      </div>
    </div>
  );
};

export default SIdeBar;
