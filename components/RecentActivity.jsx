"use client";

import { useEffect, useRef, useState } from "react";
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

  const selectRef = useRef();

  const onClose = () => setToggleSelect(false);

  useEffect(() => {
    const handleSelectClose = (ev) => {
      if (selectRef.current && !selectRef.current.contains(ev.target))
        onClose();
    };

    document.addEventListener("click", handleSelectClose);

    return () => document.removeEventListener("click", handleSelectClose);
  }, [toggleSelect, onClose]);

  const Select = () => (
    <div className="relative" ref={selectRef}>
      <div
        onClick={() => setToggleSelect((prev) => !prev)}
        className={`flex justify-between items-center p-2 cursor-pointer ${
          toggleSelect ? "rounded-t" : "rounded"
        } w-20 md:w-24 ${lightMode ? "bg-secondaryLight" : "bg-secondaryDark"}`}
      >
        <span className="text-snow">{selectedCol}</span>
        <div className={toggleSelect ? "rotate-select" : "return-select"}>
          <BsChevronDown color="#fff" />
        </div>
      </div>
      <div
        className={`text-grayColor ${
          lightMode ? "bg-grayColor" : "bg-secondaryDark"
        } rounded-b flex flex-col absolute z-50 left-0 w-full ${
          toggleSelect ? "show-select" : "hide-select"
        }`}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => handleSelectedCol(num)}
            className="select text-darkSnow m-1 rounded cursor-pointer inline-block hover:bg-secondaryLight hover:text-grayColor hover:pl-1"
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`${
        lightMode ? "bg-snow" : "bg-secondarySemiDark"
      } p-4 rounded-md w-full lg:w-[65%]`}
    >
      <div
        className={`w-full border-b ${
          lightMode ? "border-darkSnow" : "border-secondaryLight"
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

      <section className="w-full transaction-history h-full">
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th>
                <div className="flex items-center space-x-4">
                  <h4 className={`${lightMode ? "text-dark" : "text-snow"}`}>
                    Day
                  </h4>
                  <CgArrowsExchangeV color="#7250ee" size={20} />
                </div>
              </th>
              <th>
                <h4 className={`${lightMode ? "text-dark" : "text-snow"}`}>
                  <span className="hidden md:inline-block">Transaction</span>{" "}
                  Details
                </h4>
              </th>

              <th>
                <div className="flex items-center space-x-4">
                  <CgArrowsExchangeV color="#7250ee" size={20} />
                  <h4
                    className={`${
                      lightMode ? "text-dark" : "text-snow"
                    } text-sm`}
                  >
                    Amount
                  </h4>
                </div>
              </th>

              <th className="hidden md:block">
                <CgArrowsExchangeV color="#7250ee" size={20} />
              </th>
            </tr>
          </thead>
          <tbody>
            {transHis.map((history, key) => (
              <tr
                key={key}
                className={lightMode ? "table-light" : "table-dark "}
              >
                <td>
                  <div
                    className={`flex flex-col space-y-2 ${
                      lightMode ? "text-grayColor" : "text-darkSnow"
                    }`}
                  >
                    <h4>{history.date.month}</h4>
                    <p>{history.date.day}</p>
                  </div>
                </td>

                <td>
                  <div className="flex items-center space-x-2">
                    <div>
                      <div className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
                        <Image
                          src={history.image}
                          alt="user profile"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>

                    <div
                      className={`flex flex-col ${
                        lightMode ? "text-grayColor" : "text-darkSnow"
                      }`}
                    >
                      <span className="text-secondaryLight">
                        Recieved Bitcoin
                      </span>
                      <span>{history.transactName}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="flex flex-col space-y-2">
                    <span
                      className={` ${
                        lightMode ? "text-grayColor" : "text-darkSnow"
                      }`}
                    >
                      + ${history.amount.price}
                    </span>
                    <span
                      className={`text-xs  ${
                        lightMode ? "text-secondaryDark" : "text-secondaryLight"
                      }`}
                    >
                      + ${history.amount.rate}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-grayColor mt-5 flex justify-between items-center">
          <span className="text-grayColor">
            Showing 1 of {transHis.length} Entries
          </span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "Next"].map((i, x) => (
              <div
                onClick={() => setActive(i)}
                key={x}
                className={`flex justify-center items-center text-darkSnow cursor-pointer ${
                  active === i
                    ? lightMode
                      ? "bg-grayColor"
                      : "bg-primaryColor"
                    : "bg-secondaryLight"
                } min-w-[25px] h-[25px] rounded-md p-2`}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
