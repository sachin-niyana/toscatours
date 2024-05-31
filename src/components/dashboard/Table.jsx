"use client"; // This directive marks the component as a Client Component

import React, { useState } from "react";
import { Arrows, BtnArrow, Dots, Filtericon, Searchicon } from "../common/Icon";
import { kunden } from "../common/Helper";
import Link from "next/link";

const Table = () => {
  // dropdown
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalPages = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = Number(event.target.innerText);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    closeDropdown();
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = kunden.slice(startIndex, endIndex);

  // checkboxes
  const [checkedItems, setCheckedItems] = useState(
    new Array(kunden.length).fill(false)
  );
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleMasterCheckboxChange = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);
    setCheckedItems(new Array(kunden.length).fill(newCheckedState));
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    const allChecked = updatedCheckedItems.every((item) => item);
    setIsAllChecked(allChecked);
  };

  // pagination
  const renderPaginationButtons = () => {
    const buttons = [];
    const showDots = totalPages > 5;

    if (showDots) {
      if (currentPage <= 4) {
        for (let i = 1; i <= 4; i++) {
          buttons.push(i);
        }
        buttons.push("...");
        buttons.push(totalPages);
      } else if (currentPage > 4 && currentPage < totalPages - 4) {
        buttons.push(1);
        buttons.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          buttons.push(i);
        }
        buttons.push("...");
        buttons.push(totalPages);
      } else {
        buttons.push(1);
        buttons.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          buttons.push(i);
        }
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    }

    return buttons.map((button, index) => {
      if (button === "...") {
        return (
          <li key={index}>
            <span className="px-4 py-2 text-sm font-medium text-gray-600">
              ...
            </span>
          </li>
        );
      }
      return (
        <li key={index}>
          <button
            className={`px-4 py-2 text-sm font-medium text-dark-gray rounded-xl ${
              currentPage === button
                ? "bg-cream text-orange"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handlePageChange(button)}
          >
            {button}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="bg-mist-gray pt-3 md:pt-12 pb-28 sm:py-9 xl:py-10 px-6 xl:px-12 w-full overflow-y-scroll overflow-x-hidden sm:h-[calc(100vh-104px)] h-[calc(100vh-110px)]">
      <div className="rounded-3xl bg-white max-w-[1088px] 2xl:max-w-full ">
        <div className="pt-6 overflow-hidden ">
          <nav className=" flex px-4 md:px-6 gap-3 md:gap-6 pb-6 justify-between items-center">
            <div className="bg-mist-gray py-[11px] px-4 w-full flex gap-3 items-center rounded-3xl border-[.5px] border-neutral-gray">
              <Searchicon />
              <input
                type="search"
                placeholder="Suche mit Name oder Email"
                className="bg-mist-gray outline-0 w-full border-0"
              />
            </div>
            <button className="p-[11px_24px] bg-mist-gray flex items-center  border border-transparent gap-2 rounded-3xl font-medium text-base leading-6 text-black">
              <span>
                <Filtericon />
              </span>
              Filters
            </button>
          </nav>

          <div className="overflow-x-scroll max-w-full  ">
            <table className="w-full min-w-[1100px] xl:min-w-full  ">
              <thead>
                <tr className="border-t-2 border-neutral-gray">
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] my-5 md:my-6">
                    <div className="flex items-center gap-2">
                      <span className="ps-4 pe-9">
                        <input
                          type="checkbox"
                          checked={isAllChecked}
                          onChange={handleMasterCheckboxChange}
                        />
                      </span>
                      Customer name
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] my-3 md:my-6">
                    <div className="flex items-center gap-2">
                      Email
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] my-3 md:my-6">
                    <div className="flex items-center justify-center ps-5 gap-2">
                      Location
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base text-center leading-6 tracking-[0.2px] my-3 md:my-6">
                    <div className="flex items-center justify-end ps-5 gap-2">
                      Bookings
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base text-center items-center flex justify-center leading-6 tracking-[0.2px] my-3 md:my-6">
                    <div className="flex items-center gap-2">
                      Amount
                      <Arrows />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((item, index) => (
                  <tr
                    key={startIndex + index}
                    className="border-t-2 border-b-2 border-neutral-gray"
                  >
                    <td className="text-base flex items-center font-semibold leading-6 text-light-black py-3 md:py-5">
                      <span className="px-4 gap-8 flex items-center">
                        <input
                          className="pe-6"
                          type="checkbox"
                          checked={checkedItems[startIndex + index]}
                          onChange={() =>
                            handleCheckboxChange(startIndex + index)
                          }
                        />
                        {item.ballIcon}
                      </span>
                      {item.customerName}
                    </td>
                    <td className="text-base font-semibold leading-6 text-light-black py-3 md:py-6">
                      {item.email}
                    </td>
                    <td className="text-base font-semibold text-center leading-6 text-light-black py-3 md:py-6">
                      {item.location}
                    </td>
                    <td className="text-base font-semibold  text-center leading-6 text-light-black py-3 md:py-6">
                      {item.bookings}
                    </td>
                    <td className="text-base pe-3 font-semibold flex items-center justify-end leading-6 text-light-black py-3 md:py-6">
                      {item.amount}
                      <span className="px-4 gap-8 flex items-center">
                        <Dots />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* dropdown */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 w-full gap-6 md:gap-3 lg:gap-6">
          <div className=" py-3 md py-3:md:py-6 px-0 lg:px-6 flex gap-3 items-center ">
            <p className="text-sm text-nowrap font-medium leading-[22.5px] text-medium-gray">
              Show result:
            </p>
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="font-medium text-base leading-normal pr-1 sm:pl-4 pl-3 bg-mist-gray border border-solid border-neutral-gray rounded-lg text-light-black flex items-center"
              >
                {itemsPerPage}
                <BtnArrow />
              </button>
              {isOpen && (
                <div className="origin-top-right absolute bottom-11 right-0 mt-2 w-18 rounded-lg p-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul
                    className="py-4 px-6 bg-white gap-3 flex flex-col justify-center items-center rounded-2xl h-52 overflow-y-scroll"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((option) => (
                      <li key={option}>
                        <Link
                          href="#"
                          className="block text-black text-sm font-normal leading-normal"
                          onClick={handleItemsPerPageChange}
                        >
                          {option}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className={`px-4 py-2 text-sm font-medium rotate-[-90deg] text-gray-600 rounded-xl ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <BtnArrow className="rotate-180" />
            </button>
            <ul className="flex space-x-2">{renderPaginationButtons()}</ul>
            <button
              className={`px-4 py-2 text-sm font-medium rotate-[-90deg] text-gray-600 rounded-xl ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <BtnArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
