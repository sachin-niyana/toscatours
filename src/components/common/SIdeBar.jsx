import Image from "next/image";
import Link from "next/link";
import React from "react";

const SIdeBar = () => {
  return (
    <div className="max-w-[295px] pt-6 pb-10">
      <Link href="/">
        <Image
          className="w-full"
          src="/assets/images/common/webp/logo.webp"
          width={200}
          height={42}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default SIdeBar;
