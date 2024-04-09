"use client";

import { useState } from "react";
import { transactionHistory } from "@/constants";
import { BsChevronDown } from "react-icons/bs";
import { CgArrowsExchangeV } from "react-icons/cg";
import Image from "next/image";

import { contextFunc } from "./useStateContext/StateContext";

export default function RecentActivity() {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [active, setActive] = useState(1);
  const [selectedCol, setSelectedCol] = useState(5);
  const [transHis, setTransHis] = useState([...transactionHistory]);

  const { lightMode } = contextFunc();

  const handleSelectedCol = (num) => {
    setSelectedCol(num);
    setToggleSelect(false);
  };

  const Select = () => (
    <div className="relative">
      <div
        className={`flex justify-between items-center w-[90px] ${
          lightMode ? "bg-grayColor" : "bg-secondaryDark"
        } py-2 px-2`}
      >
        <span className="text-snow">{selectedCol}</span>
        <BsChevronDown
          color="#fff"
          onClick={() => setToggleSelect((prev) => !prev)}
        />
      </div>
      <div
        className={
          toggleSelect
            ? "absolute w-full px-2 flex flex-col bg-secondaryDark"
            : " hidden"
        }
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => handleSelectedCol(num)}
            className="text-snow"
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`w-full h-full md:w-[55vw] ${
        lightMode ? "bg-snow" : "bg-secondarySemiDark"
      } rounded-md mt-5 md:mt-0 p-4`}
    >
      <div
        className={`w-full border-b ${
          lightMode ? "border-darkSnow" : "border-grayColor"
        }`}
      >
        <h3 className={`${lightMode ? "text-dark" : "text-snow"} my-2`}>
          Recent Activities
        </h3>
      </div>
      <div className="flex justify-start items-center gap-2 mt-5">
        <span
          className={`${lightMode ? "text-dark" : "text-grayColor"} text-sm`}
        >
          Show
        </span>
        <Select />
        <span
          className={`${lightMode ? "text-dark" : "text-grayColor"} text-sm`}
        >
          Entries
        </span>
      </div>
      <div
        className={`border ${
          lightMode ? "border-darkSnow" : "border-grayColor "
        } rounded-sm ${
          lightMode ? "bg-snow" : "bg-secondarySemiDark"
        } mt-4 py-2`}
      >
        <div className="flex items-center justify-between p-2">
          <div className="flex gap-2 items-center">
            <span
              className={`${lightMode ? "text-dark" : "text-snow"} text-sm`}
            >
              Day
            </span>
            <CgArrowsExchangeV color="#7250ee" size={20} />
          </div>
          <span className={`${lightMode ? "text-dark" : "text-snow"}`}>
            Transaction Details
          </span>
          <div className="flex gap-2 items-center">
            <CgArrowsExchangeV color="#8b86a1" size={20} />
            <span
              className={`${lightMode ? "text-dark" : "text-snow"} text-sm`}
            >
              Amount
            </span>
          </div>
        </div>
        <div className="mt-5">
          {transHis.slice(0, selectedCol).map((history, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border-t  ${
                lightMode ? "border-darkSnow" : "border-grayColor"
              } p-2`}
            >
              <div
                className={`flex flex-col ${
                  lightMode ? "text-dark" : "text-snow"
                } w-full md:w-[110px] `}
              >
                <span>{history.date.month}</span>
                <span>{history.date.day}</span>
              </div>
              <div className="flex  gap-2 w-auto md:w-[130px]">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <Image
                    src={history.image}
                    alt="recepient photo"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`${lightMode ? "text-dark" : "text-snow"}`}>
                    {history.transact}
                  </span>
                  <span className={`${lightMode ? "text-dark" : "text-snow"} text-sm`}>
                    {history.transactName}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center ml-2 w-full md:w-[120px]">
                <span className={`${lightMode ? "text-dark" : "text-snow"} text-sm`}>
                  {history.amount.price}
                </span>
                <span
                  className={`text-sm ${lightMode ? "text-dark" : "text-snow"} text-sm`}
                >
                  ${history.amount.rate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-grayColor mt-5 flex justify-between items-center">
        <span className="text-grayColor">
          Showing 1 of {transHis.length} Entries
        </span>
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((i, x) => (
            <div
              onClick={() => setActive(i)}
              key={x}
              className={`flex justify-center items-center text-${
                active == i ? "snow" : "grayColor"
              } w-[25px] h-[25px] rounded-md bg-${
                i == active ? "primaryColor" : "secondaryDark"
              }`}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
