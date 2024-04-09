"use client";

import { contextFunc } from "./useStateContext/StateContext";
import { useState } from "react";
import { BiSolidCart } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

export default function Assets() {
  const { lightMode } = contextFunc();
  const [toggleMarket, setToggleMarket] = useState("Sell");
  const [togglePurchase, setTogglePurchase] = useState("Limit");

  const Select = ({ tag, amount, icon }) => (
    <div
      className={`${
        lightMode ? "bg-darkSnow" : "bg-secondaryDark"
      } flex justify-between items-center mt-5 p-2 rounded-md`}
    >
      <span className="text-grayColor text-sm">{tag}</span>

      <div className="flex items-center gap-2">
        <span className="text-grayColor text-sm">{amount}</span>
        {icon}
      </div>
    </div>
  );

  return (
    <div
      className={`${lightMode ? "bg-snow" : "bg-secondarySemiDark"} rounded-md`}
    >
      <div
        className={`w-full border-b ${
          lightMode ? "border-darkSnow" : "border-secondaryLight"
        }`}
      >
        <div className="flex items-center justify-center p-4">
          <button
            onClick={() => setToggleMarket("Sell")}
            className={`${
              toggleMarket === "Sell"
                ? `${lightMode ? "bg-secondaryLight" : "bg-primaryColor"}`
                : `${lightMode ? "bg-grayColor" : "bg-grayColor"}`
            } w-[120px] text-snow text-sm py-2 px-4 rounded-l-3xl`}
          >
            {`Sell`}
          </button>
          <button
            onClick={() => setToggleMarket("Buy")}
            className={`${
              toggleMarket === "Buy"
                ? `${lightMode ? "bg-secondaryLight" : "bg-primaryColor"}`
                : `${lightMode ? "bg-grayColor" : "bg-grayColor"}`
            } w-[120px] text-snow text-sm py-2 px-4 rounded-r-3xl`}
          >
            {`Buy`}
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={() => setTogglePurchase("Limit")}
          className={`${
            togglePurchase === "Limit"
              ? `${lightMode ? "bg-secondaryLight" : "bg-primaryColor"}`
              : `${lightMode ? "bg-grayColor" : "bg-grayColor"}`
          } w-[80px] text-snow text-sm py-1 px-4 rounded-l-3xl`}
        >
          Limit
        </button>

        <button
          onClick={() => setTogglePurchase("Market")}
          className={`${
            togglePurchase === "Market"
              ? `${lightMode ? "bg-secondaryLight" : "bg-primaryColor"}`
              : `${lightMode ? "bg-grayColor" : "bg-grayColor"}`
          } w-[80px] text-snow text-sm py-1 px-4`}
        >
          Market
        </button>

        <button
          onClick={() => setTogglePurchase("Stop")}
          className={`${
            togglePurchase === "Stop"
              ? `${lightMode ? "bg-secondaryLight" : "bg-primaryColor"}`
              : `${lightMode ? "bg-grayColor" : "bg-grayColor"}`
          } w-[80px] text-snow text-sm py-1 px-4 rounded-r-3xl`}
        >
          Stop
        </button>
      </div>

      <div className="p-4">
        <Select
          tag={`Price(TUSD)`}
          amount={`30,690.04`}
          icon={<BsChevronDown color={`${lightMode ? "#000" : "#fff"}`} />}
        />
        <Select
          tag={`Amount(BTC)`}
          amount={`0.00434`}
          icon={<BsChevronDown color={`${lightMode ? "#000" : "#fff"}`} />}
        />
        <Select tag={`Total`} amount={`18.5949`} />
      </div>

      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col">
          <span className="text-grayColor text-sm">Max Buy BTC</span>
          <span className="text-grayColor">0.000000</span>
        </div>
        <div className="flex flex-col">
          <span className="text-grayColor text-sm">Max Buy BTC</span>
          <span className="text-grayColor">0.0</span>
        </div>
      </div>

      <div className="p-4">
        <button className="flex justify-center items-center gap-2 bg-primaryColor text-snow py-2 px-4 rounded-3xl w-full outline-none border-none">Buy ETH <BiSolidCart /></button>
      </div>
    </div>
  );
}
