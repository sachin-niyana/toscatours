"use client";
import Link from "next/link";
import React, { useState } from "react";

const Error = () => {
  const [isSidebarDropDown, setIsSidebarDropDown] = useState(true);
  const closeBtn2 = () => setIsSidebarDropDown(false);
  return (
    <>
      {isSidebarDropDown && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-3 sm:px-0">
          <div className="bg-white w-96 p-8 rounded-md shadow-lg relative flex flex-col ">
            <h2 className="text-2xl font-bold leading-[144%] text-red text-center absolute top-2 left-2">
              Error :
            </h2>
            <Link
              href="/dashboard"
              onClick={closeBtn2}
              className="absolute top-2 right-2 text-white bg-red rounded py-1 px-2 hover:bg-green transition-all ease-linear duration-300"
            >
              Close
            </Link>

            <h3 className="text-5xl font-bold leading-[144%] text-red pt-2 text-center">
              404
            </h3>
            <p className="text-xl font-normal text-black leading-normal text-center">
              This page could not be found.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
