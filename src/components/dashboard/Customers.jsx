import React from "react";
import { Arrows, Ball1, Dots, Filtericon, Searchicon } from "../common/Icon";
import { kunden } from "../common/Helper";

const Customers = () => {
  return (
    <div className="bg-mist-gray py-10 px-5">
      <div className="rounded-3xl bg-white">
        <div className="pt-6 ">
          <nav className="flex px-4 md:px-6 gap-3 md:gap-6 pb-6 justify-between items-center">
            <div className="bg-mist-gray  py-[11px] px-4 w-full flex gap-3 items-center rounded-3xl border-[.5px] border-neutral-gray">
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
                        <input type="checkbox" />
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
                        <input className="pe-6" type="checkbox" />
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
                    <td className="text-base font-semibold flex items-center leading-6 text-light-black py-6">
                      {item.amount}
                      <span className="px-4 gap-8 flex items-center">
                        <Dots />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 flex gap-3 items-center">
              <p className="text-sm font-medium  leading-[22.5px] text-medium-gray">
                Show result:
              </p>
              <label for="numbers" className=""></label>
              <select
                id="numbers"
                className=" border border-neutral-gray text-sm font-medium leading-[22.5px] outline-0 rounded-lg py-2 px-3"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
