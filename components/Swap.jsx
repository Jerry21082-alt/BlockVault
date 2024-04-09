"use client";

import { wallet } from "@/constants";
import Image from "next/image";
import { contextFunc } from "./useStateContext/StateContext";

export default function Swap() {
  const {
    swap,
    setSwap,
    priceInput,
    setPriceInput,
    selectCurrency,
    selectedCurrency,
    handleChange,
  } = contextFunc();

  return (
    <div
      className={
        swap
          ? `fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-secondaryLight w-[300px] h-[350px] rounded-md p-2`
          : `hidden`
      }
    >
      <h4 className="text-grayColor font-bold">Choose Wallet</h4>
      <div className="p-3">
        <div className="flex gap-5 mt-5 overflow-x-auto w-full">
          {wallet.map((wallet, index) => (
            <div
              onClick={() => selectedCurrency(wallet)}
              key={index}
              className="relative"
            >
              <div
                className={
                  selectCurrency == index
                    ? `rounded-full w-[20px] h-[20px] bg-violetColor absolute right-0`
                    : `hidden`
                }
              ></div>
              <div className="flex-items-center justify-center w-[50px]">
                <Image src={wallet.currency} alt="currency photo" />
              </div>
              <span className="text-grayColor text-sm">
                {wallet.currencyName}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <span className="text-grayColor font-bold">Amount</span>
          <div className="flex justify-between items-center mt-5">
            <input
              className="w-[100px] rounded-3xl  outline-none bg-secondaryDark text-snow p-1"
              placeholder="$"
              value={priceInput}
              onChange={handleChange}
            />

            <span className="text-grayColor">${priceInput * 30077}</span>
          </div>
          <div className="flex items-center justify-center w-full mt-10">
            <button
              onClick={() => setSwap(false)}
              className="bg-primaryColor outline-none border-none py-2 px-4 rounded-3xl text-snow w-full"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
