"use client";

import { useState } from "react";
import Partner from "@/components/Partner";
import Layout from "@/components/Layout";
import { behance_logo, mastCard_logo, visa_logo } from "@/public/paymentLogos";
import Image from "next/image";
import { contextFunc } from "@/components/useStateContext/StateContext";

export default function BuyCrypto() {
  const [isButtonActive, setIsButtonActive] = useState("buy");
  const [currency, setCurrency] = useState("usdt");

  const { lightMode } = contextFunc();

  return (
    <Layout>
      <div
        className={`p-5 bg-${
          lightMode ? "darkSnow" : "secondaryDark"
        } w-full md:w-[80vw]`}
      >
        <div className="flex items-center mt-2">
          <button
            onClick={() => setIsButtonActive("buy")}
            className={`rounded-l-3xl ${
              isButtonActive === "buy"
                ? `bg-${lightMode ? "secondaryDark" : "primaryColor"}`
                : `bg-${!lightMode ? "secondaryLight" : "grayColor"}`
            } ${
              isButtonActive === "buy"
                ? `text-${lightMode ? "snow" : "snow"}`
                : `text-${lightMode ? "snow" : "grayColor"}`
            } py-1 px-4 border-none outline-none`}
          >
            Buy
          </button>

          <button
            onClick={() => setIsButtonActive("sell")}
            className={`rounded-r-3xl 
              ${
                isButtonActive === "sell"
                  ? `bg-${lightMode ? "secondaryDark" : "primaryColor"}`
                  : `bg-${!lightMode ? "secondaryLight" : "grayColor"}`
              }
              ${
                isButtonActive === "sell"
                  ? `text-${lightMode ? "snow" : "snow"}`
                  : `text-${lightMode ? "snow" : "grayColor"}`
              } py-1 px-4 border-none outline-none`}
          >
            Sell
          </button>
        </div>
        <div className="flex justify-between">
          <h2
            className={`font-semibold text-${lightMode ? "dark" : "snow"} mt-5`}
          >
            Payment Partner
          </h2>
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex justify-center items-center w-[30px] h-[30px]">
              <Image src={visa_logo} alt="visa card logo" />
            </div>
            <div className="flex justify-center items-center w-[30px] h-[30px]">
              <Image src={mastCard_logo} alt="visa card logo" />
            </div>

            <div className="flex justify-center items-center w-[25px] h-[20px]">
              <Image src={behance_logo} alt="visa card logo" />
            </div>
          </div>
        </div>
        <div
          className={`bg-${
            lightMode ? "snow" : "secondarySemiDark"
          } rounded-md p-4 mt-5`}
        >
          <div className="flex items-center justify-center">
            <button
              onClick={() => setCurrency("usdt")}
              className={`border-none outline-none py-2 px-4 rounded-l-3xl bg-${
                currency == "usdt" ? "primaryColor" : "secondaryLight"
              } text-${currency == "usdt" ? "snow" : "grayColor"}`}
            >
              {" "}
              USDT
            </button>
            <button
              onClick={() => setCurrency("usdc")}
              className={`border-none outline-none py-2 px-4 bg-${
                currency == "usdc" ? "primaryColor" : "secondaryLight"
              } text-${currency == "usdc" ? "snow" : "grayColor"}`}
            >
              USDC
            </button>
            <button
              onClick={() => setCurrency("btc")}
              className={`border-none outline-none py-2 px-4 bg-${
                currency == "btc" ? "primaryColor" : "secondaryLight"
              } text-${currency == "btc" ? "snow" : "grayColor"}`}
            >
              BTC
            </button>
            <button
              onClick={() => setCurrency("eth")}
              className={`border-none outline-none py-2 px-4 rounded-r-3xl bg-${
                currency == "eth" ? "primaryColor" : "secondaryLight"
              } text-${currency == "eth" ? "snow" : "grayColor"}`}
            >
              ETH
            </button>
          </div>

          <Partner isButtonActive={isButtonActive} currency={currency} />
        </div>
      </div>
    </Layout>
  );
}
