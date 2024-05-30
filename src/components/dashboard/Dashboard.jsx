"use client";
import DashboardCards from "../custom-ui/DashboardCards";
import { DashboardCardList, MonthList } from "../../components/common/Helper";
import { BtnArrow } from "../common/Icon";
import { useState } from "react";
import MapChart from "../common/MapChart";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const [Open, setOpen] = useState(false);

  const openDropdown = () => {
    setOpen(!Open);
  };
  const shutDropdown = () => {
    setOpen(false);
  };

  return (
    <div className="bg-mist-gray">
      <div className="pt-12 sm:pt-9 pb-28 md:pb-0  xl:mx-8 xl:px-0 lg:px-6 px-6 max-xl:max-h-[calc(100vh-104px)] max-xl:overflow-y-scroll">
        <div className="sm:hidden px-4 sm:px-0 ">
          <h2 className="font-bold text-2xl !leading-[144%]">Hi Stéphane</h2>
          <p className="font-medium text-base text-dark-gray !leading-[115%] ">
            Lass uns heute den Umsatz überprüfen!
          </p>
        </div>
        <div className="w-full 2xl:max-w-[1088px] mx-auto ">
          <div className="flex flex-row flex-wrap -mx-3 justify-center pb-6 md:pb-8">
            {DashboardCardList.map((obj, index) => {
              return (
                <DashboardCards
                  index={index}
                  key={index}
                  cardicon={obj.cardicon}
                  subheading={obj.subheading}
                  heading={obj.heading}
                  grade={obj.grade}
                  grademark={obj.grademark}
                  className={obj.className}
                  description={obj.description}
                />
              );
            })}
          </div>
          <div className="flex flex-row flex-wrap -mx-3 justify-center">
            <div className="xl:w-6/12 lg:w-8/12 md:w-10/12 w-full px-3 xl:px-4 ">
              <div className=" flex lg:block justify-center">
                <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px]  sm:min-h-[348px] min-h-[320px] w-full ">
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
                        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
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
                  <MapChart />
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-10/12 w-full px-3 xl:px-4 pt-6 md:pt-8 xl:pt-0">
              <div className=" flex lg:block lg:justify-end justify-center">
                <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px]  min-h-[348px] w-full">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-black sm:block hidden font-medium text-xl leading-normal capitalize">
                      Top Angebote
                    </p>
                    <p className="text-black sm:hidden block font-medium text-xl leading-normal capitalize">
                      Top Offers
                    </p>
                    <div className="relative inline-block">
                      <button
                        onClick={toggleDropdown}
                        className="font-medium sm:text-base text-xs leading-normal sm:py-1 sm:py-05 py-1 sm:pr-2 pr-1 sm:pl-4 pl-3 bg-mist-gray border border-solid border-neutral-gray rounded-full text-light-black flex items-center"
                      >
                        This month
                        <BtnArrow className="sm:w-10 w-7 sm:h-10 h-7" />
                      </button>
                      {isOpen && (
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
                                onClick={shutDropdown}
                              >
                                {obj.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-solid border-mist-gray">
                    <div className="flex gap-4 items-center">
                      <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                        No.
                      </p>
                      <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                        Product
                      </p>
                    </div>
                    <div className="flex max-[1300px]:gap-15 xl:gap-[109px] lg:gap-6 sm:gap-[116px] gap-8 items-center">
                      <p className="font-medium text-sm text-light-gray leading-normal capitalize max-[380px]:hidden">
                        Price
                      </p>
                      <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                        Item Sold
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 pb-[13.02px] border-b border-solid border-mist-gray">
                    <div className="flex gap-4 xl:gap-7  items-center">
                      <p className="font-normal text-xs leading-[155%] text-light-gray">
                        1
                      </p>
                      <div className="flex gap-1 flex-col">
                        <p className="capitalize font-normal lg:text-sm text-xs text-black">
                          Trail-Bike, Insel Elba
                        </p>
                        <p className="capitalize font-normal lg:text-sm text-xs text-gray">
                          Trail-Bike, Insel Elba
                        </p>
                      </div>
                    </div>
                    <div className="flex max-[1300px]:gap-15 2xl:gap-[116px] xl:gap-[72px] lg:gap-6 sm:gap-[116px] gap-8 items-center">
                      <p className="uppercase font-medium lg:text-sm text-xs leading-normal text-orange max-[380px]:hidden">
                        1 460 CHF
                      </p>
                      <p className="font-normal text-dark-gray lg:text-sm text-xs leading-normal">
                        10 pcs
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 pb-[13.02px] border-b border-solid border-mist-gray">
                    <div className="flex gap-4 xl:gap-7 items-center">
                      <p className="font-normal text-xs leading-[155%] text-light-gray">
                        2
                      </p>
                      <div className="flex gap-1 flex-col">
                        <p className="capitalize font-normal lg:text-sm text-xs text-black">
                          Trail-Bike, Insel Elba
                        </p>
                        <p className="capitalize font-normal lg:text-sm text-xs text-gray">
                          04.05.2024 - 11.05.2024
                        </p>
                      </div>
                    </div>
                    <div className="flex max-[1300px]:gap-15 2xl:gap-[116px] xl:gap-[72px] lg:gap-6 sm:gap-[116px] gap-8 items-center">
                      <p className="uppercase font-medium lg:text-sm text-xs leading-normal text-orange max-[380px]:hidden">
                        1 460 CHF
                      </p>
                      <p className="font-normal text-dark-gray lg:text-sm text-xs leading-normal">
                        12 pcs
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <div className="flex gap-4 xl:gap-7  items-center">
                      <p className="font-normal text-xs leading-[155%] text-light-gray">
                        3
                      </p>
                      <div className="flex gap-1 flex-col">
                        <p className="capitalize font-normal lg:text-sm text-xs text-black">
                          Trail-Bike, Insel Elba
                        </p>
                        <p className="capitalize font-normal lg:text-sm text-xs text-gray">
                          11.05.2024 - 18.05.2024
                        </p>
                      </div>
                    </div>
                    <div className="flex max-[1300px]:gap-15 2xl:gap-[116px] xl:gap-[72px] lg:gap-6 sm:gap-[116px] gap-8 items-center">
                      <p className="uppercase font-medium lg:text-sm text-xs leading-normal text-orange max-[380px]:hidden">
                        1 460 CHF
                      </p>
                      <p className="font-normal text-dark-gray lg:text-sm text-xs leading-normal">
                        3 pcs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
