"use client";
import React, { useState } from "react";
import { MonthList, ProfileCardList } from "@/components/common/Helper";

import Image from "next/image";
import { BtnArrow } from "@/components/common/Icon";

const page = () => {
  const [Open, setOpen] = useState(false);

  const openDropdown = () => {
    setOpen(!Open);
  };
  const closeDropdown = () => {
    setOpen(false);
  };

  return (
    <div className="w-full mx-auto px-10 pt-6 pb-16  sm:py-10 max-h-[calc(100vh-104px)] overflow-y-scroll">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex items-center gap-5">
          <div className=" max-w-24  lg:max-w-32">
            <Image
              width={128}
              height={128}
              src="/assets/images/png/ProfileImg.webp"
              alt="profile Img"
              className="w-full"
            />
          </div>{" "}
          <div className="">
            <h2 className="text-4xl font-bold leading-[144%] text-black">
              Stéphane{" "}
            </h2>
            <p className="text-lg font-normal leading-normal text-dark-gray pt-1">
              Geschäftsführer
            </p>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex flex-row flex-wrap -mx-3 justify-center pb-6 md:pb-8">
            {ProfileCardList.map((obj, index) => {
              const grademarkClass = index === 2 && "text-red";
              return (
                <div
                  key={index}
                  className="w-full md:w-6/12 xl:w-4/12 px-3 xl:px-4 pt-6 md:pt-8"
                >
                  <div className="py-6 bg-white pl-6 rounded-3xl hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 xl:max-w-[341px] w-full max-h-[164px] h-full mx-auto md:mx-0">
                    <div className="flex items-center mb-2 gap-2">
                      <span>{obj.icon}</span>
                      <p className="text-base font-normal text-black leading-[163%]">
                        {obj.subheading}
                      </p>
                    </div>
                    <h1 className="text-black font-medium text-3xxl leading-normal mb-2">
                      {obj.heading}
                    </h1>
                    <div className="flex gap-1 items-center">
                      <p className="flex items-center font-medium text-green text-base leading-[163%] gap-1">
                        <span>{obj.grade}</span>
                        <span className={grademarkClass}>
                          {obj.grademark}
                        </span>{" "}
                      </p>
                      <p className="font-medium text-base leading-[163%] text-light-gray">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex lg:block justify-center mb-14 sm:mb-0">
            <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl max-w-[700px] w-full ">
              <div className="flex justify-between items-center mb-4">
                <p className="text-black sm:block hidden font-medium text-xl leading-normal capitalize">
                  Verkäufe
                </p>
                <p className="text-black sm:hidden block font-medium text-xl leading-normal capitalize">
                  Sales
                </p>
                <div className="relative inline-block">
                  <button
                    onClick={openDropdown}
                    className="font-medium sm:text-base text-xs leading-normal sm:py-1 sm:py-05 py-1 sm:pr-2 pr-1 sm:pl-4 pl-3 bg-mist-gray border border-solid border-neutral-gray rounded-full text-light-black flex items-center"
                  >
                    This month
                    <BtnArrow className="sm:w-10 w-7 sm:h-10 h-7" />
                  </button>
                  {Open && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <ul
                        className="py-4 px-6 bg-white gap-3 flex flex-col justify-start items-center rounded-2xl lg:h-52 sm:h-44 h-36 overflow-y-scroll"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {MonthList.map((obj, index) => (
                          <li
                            key={index}
                            className="block text-black text-sm font-normal leading-normal cursor-pointer"
                            onClick={closeDropdown}
                          >
                            {obj.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center xl:gap-4 sm:gap-3 gap-[9.8px] pb-2">
                  <div className="flex xl:gap-[22px] sm:gap-4 gap-3 flex-col items-end">
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      2 500 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      2 000 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      1 000 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      500 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      0 CHF
                    </p>
                  </div>
                  <div>
                    {" "}
                    <Image
                      width={406}
                      height={118}
                      src="/assets/images/png/graph-img.png"
                      alt="graph-img"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex lg:gap-[30px] sm:gap-6 gap-[19px] justify-center">
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Sun
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Mon
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Tue
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Wed
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Thu
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Fri
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Sat
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 justify-center">
                <p className="capitalize font-normal text-xs leading-normal text-dark-gray flex gap-1 items-center group max-w-28">
                  <span className="w-3 h-3 bg-orange rounded-full group-hover:bg-gray transition-colors ease-linear duration-300"></span>
                  Diesen Monat
                </p>
                <p className="capitalize font-normal text-xs leading-normal text-dark-gray flex gap-1 items-center group max-w-32">
                  <span className="w-3 h-3 bg-orange rounded-full group-hover:bg-gray transition-colors ease-linear duration-300"></span>
                  Vorheriger Monat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
