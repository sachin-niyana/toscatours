"use client"; // This directive marks the component as a Client Component

import React, { useState } from "react";
import { Arrows, Dots, Filtericon, Searchicon } from "../common/Icon";
import { kunden } from "../common/Helper";

const Table = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default number of items per page
  const totalPages = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page whenever items per page changes
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
        for (let i = currentPage; i <= currentPage + 1; i++) {
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
                {visibleItems.map((item, index) => (
                  <tr
                    key={startIndex + index}
                    className="border-t-2 border-b-2 border-neutral-gray"
                  >
                    <td className="text-base flex items-center font-semibold leading-6 text-light-black py-5">
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
              className="border custom-dropdown border-neutral-gray text-sm font-medium leading-[22.5px] outline-0 rounded-lg py-2 px-3 bg-white text-black hover:bg-gray-100 focus:bg-gray-200"
              name="numbers"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="flex justify-end mt-6">
            <nav className="flex" aria-label="Pagination">
              <ul className="flex gap-2">{renderPaginationButtons()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
