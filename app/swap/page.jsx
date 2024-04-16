"use client";

import { useState } from "react";
import { bitcoin, ethereum } from "@/public/crypto-assets";
import { wallet } from "@/constants";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import { RiExchangeFill, RiExchangeLine } from "react-icons/ri";
import Swap from "@/components/Swap";
import { contextFunc } from "@/components/useStateContext/StateContext";
import SecondSwap from "@/components/SecondSwap";
import Layout from "@/components/Layout";

export default function Exchange() {
  const {
    setSwap,
    priceInput,
    selectCurrency,
    setSecondChoice,
    secondCurr,
    secondPriceInput,
    lightMode,
  } = contextFunc();

  const currentCurrency = wallet[selectCurrency];

  const secondCurrentCurr = wallet[secondCurr];

  return (
    <Layout>
      <div
        className={`bg-${
          lightMode ? "darkSnow" : "secondaryDark"
        } w-full flex justify-center mt-14 swap`}
      >
        <div
          className={`rounded-md bg-${
            lightMode ? "snow" : "secondarySemiDark"
          } w-[90%] md:w-[40%]`}
        >
          <div className={`p-4 text-${lightMode ? "dark" : "snow"}`}>Swap</div>

          <div
            className={`border-t border-${
              lightMode ? "darkSnow" : "grayColor"
            }  flex flex-col justify-center items-center py-5 relative`}
          >
            <div className="absolute bg-grayColor rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <RiExchangeFill size={30} color="1f183e" />
            </div>

            <div
              className={`rounded-md border border-${
                lightMode ? "darkSnow" : "primaryColor"
              } w-[90%] p-2 flex justify-between items-center`}
            >
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-[30px]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentCurrency.currency,
                      }}
                    />
                  </div>
                  <button
                    onClick={() => setSwap((prev) => !prev)}
                    className="outline-none border-none flex  justify-center items-center gap-1 text-grayColor"
                  >
                    {currentCurrency.currencyName}{" "}
                    <BsChevronDown color={lightMode ? "#000" : "#fff"} />
                  </button>
                </div>
                <h3
                  className={`text-${
                    lightMode ? "dark" : "snow"
                  } font-bold text-xl mt-2`}
                >
                  {priceInput == "" ? 0 : priceInput} {currentCurrency.abbrev}
                </h3>
              </div>
              <div>
                <h4 className="text-grayColor text-sm">Balance 5.003 BTC</h4>
                <h3
                  className={`text-${
                    lightMode ? "dark" : "snow"
                  } font-bold text-xl mt-2 text-end`}
                >
                  ${priceInput === "" ? 0 : parseInt(priceInput) * 30077}
                </h3>
              </div>
            </div>

            <div
              className={`rounded-md border border-${
                lightMode ? "darkSnow" : "primaryColor"
              } w-[90%] p-2 flex justify-between items-center mt-5`}
            >
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-[30px]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentCurrency.currency,
                      }}
                    />
                  </div>
                  <button
                    onClick={() => setSecondChoice((prev) => !prev)}
                    className="outline-none border-none flex  justify-center items-center gap-1 text-grayColor"
                  >
                    {secondCurrentCurr.currencyName}{" "}
                    <BsChevronDown color={lightMode ? "#000" : "#fff"} />
                  </button>
                </div>
                <h3
                  className={`text-${
                    lightMode ? "dark" : "snow"
                  } font-bold text-xl mt-2`}
                >
                  {secondPriceInput == "" ? 0 : secondPriceInput}{" "}
                  {secondPriceInput} {secondCurrentCurr.abbrev}
                </h3>
              </div>
              <div>
                <h4 className="text-grayColor text-sm">Balance 5.003 BTC</h4>
                <h3
                  className={`text-${
                    lightMode ? "dark" : "snow"
                  } font-bold text-xl mt-2 text-end`}
                >
                  $
                  {secondPriceInput === ""
                    ? 0
                    : parseInt(secondPriceInput) * 30077}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-5">
            <span className="text-grayColor">Conversion Rate</span>
            <span className="text-grayColor">
              1 {currentCurrency.abbrev} = 16.2 {secondCurrentCurr.abbrev}
            </span>
          </div>
          <div className="border-t border-grayColor p-5">
            <div className="flex justify-between items-center">
              <span className="text-grayColor">Network fees</span>
              <span className={`text-${lightMode ? "dark" : "snow"} font-bold`}>
                $2.25
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-grayColor">Send</span>
              <span className={`text-${lightMode ? "dark" : "snow"} font-bold`}>
                $120.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-grayColor">Recieve</span>
              <span className={`text-${lightMode ? "dark" : "snow"} font-bold`}>
                $117.75
              </span>
            </div>
            <button
              className={`bg-primaryColor w-full rounded-3xl outline-none border-none flex justify-center items-center gap-2 py-2 mt-5 text-snow`}
            >
              Exchange <RiExchangeLine size={20} />
            </button>
          </div>
        </div>
        {/* <Swap /> */}
        {/* <SecondSwap /> */}
      </div>
    </Layout>
  );
}
