"use client"; // This directive marks the component as a Client Component

import React, { useState } from "react";
import { Arrows, Dots, Filtericon, Searchicon } from "../common/Icon";
import { kunden } from "../common/Helper";

const Table = () => {
  const itemsPerPage = 1; // Number of items per page
  const totalPages = Math.ceil(kunden.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = kunden.slice(startIndex, endIndex);

  // State to manage the checkboxes
  const [checkedItems, setCheckedItems] = useState(
    new Array(kunden.length).fill(false)
  );
  const [isAllChecked, setIsAllChecked] = useState(false);

  // Handle the change of the master checkbox
  const handleMasterCheckboxChange = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);
    setCheckedItems(new Array(kunden.length).fill(newCheckedState));
  };

  // Handle the change of individual checkboxes
  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    // If all checkboxes are checked, set the master checkbox as checked
    const allChecked = updatedCheckedItems.every((item) => item);
    setIsAllChecked(allChecked);
  };

  return (
    <div className="bg-mist-gray py-10 px-5">
      <div className="rounded-3xl bg-white ">
        <div className="pt-6 ">
          <nav className="flex px-4 md:px-6 gap-3 md:gap-6 pb-6 justify-between items-center">
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
          <div className="table-responsive">
            <table className="w-full">
              <thead>
                <tr className="border-t-2 border-neutral-gray">
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] py-6">
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
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] py-6">
                    <div className="flex items-center gap-2">
                      Email
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] py-6">
                    <div className="flex items-center gap-2">
                      Location
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] py-6">
                    <div className="flex items-center gap-2">
                      Bookings
                      <Arrows />
                    </div>
                  </th>
                  <th className="text-medium-gray font-medium text-base leading-6 tracking-[0.2px] py-6">
                    <div className="flex items-center gap-2">
                      Amount
                      <Arrows />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {kunden.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t-2 border-b-2 border-neutral-gray"
                  >
                    <td className="text-base flex items-center font-semibold leading-6 text-light-black py-5">
                      <span className="px-4 gap-8 flex items-center">
                        <input
                          className="pe-6"
                          type="checkbox"
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        {item.ballIcon}
                      </span>
                      {item.customerName}
                    </td>
                    <td className="text-base font-semibold leading-6 text-light-black py-6">
                      {item.email}
                    </td>
                    <td className="text-base font-semibold leading-6 text-light-black py-6">
                      {item.location}
                    </td>
                    <td className="text-base font-semibold leading-6 text-light-black py-6">
                      {item.bookings}
                    </td>
                    <td className="text-base  font-semibold flex items-center leading-6 text-light-black py-6">
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
        {/* Pagination bar */}

        <div className="flex justify-between px-6">
          <div className="p-6 flex gap-3 items-center">
            <p className="text-sm font-medium leading-[22.5px] text-medium-gray">
              Show result:
            </p>
            <label htmlFor="numbers" className=""></label>
            <select
              id="numbers"
              className="border border-neutral-gray text-sm font-medium leading-[22.5px] outline-0 rounded-lg py-2 px-3"
              name="numbers"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          <div className="flex justify-end mt-6">
            <nav className="flex" aria-label="Pagination">
              <ul className="flex gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      className={`px-4 py-2 text-sm font-medium text-dark-gray rounded-xl ${
                        currentPage === index + 1
                          ? "bg-cream text-orange"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
