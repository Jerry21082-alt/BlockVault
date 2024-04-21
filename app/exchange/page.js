"use client";

import Assets from "@/components/Assets";
import ExchangeChart from "@/components/ExchangeChart";
import Layout from "@/components/Layout";
import { contextFunc } from "@/components/useStateContext/StateContext";

const data = [
  {
    coin_1: "BTC",
    coin_2: "TUSD",
    high: 31026.43,
    low: 29958.67,
    vol_coin_1: 83856.53,
    vol_coin_2: 2865386457.67,
  },
];

export default function page() {
  const { lightMode } = contextFunc();

  return (
    <Layout>
      <section className="w-full h-full md:h-[90vh] flex flex-col md:flex-row items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div
          className={`h-full w-full md:w-3/4 rounded-md p-4`}
          style={{ backgroundColor: lightMode ? "#F5F5F5" : "#251c4c" }}
        >
          <div className="flex items-center justify-between space-x-2 w-full">
            <h1
              className={lightMode ? "text-grayColor" : "text-darkSnow"}
            >{`${data[0].coin_1}/${data[0].coin_2}`}</h1>
            <div className="hidden items-center justify-between space-x-8 md:flex">
              <div className="flex flex-col space-y-1">
                <span
                  className={lightMode ? "text-grayColor" : "text-grayColor"}
                >
                  24High:
                </span>
                <h4 className={lightMode ? "text-grayColor" : "text-darkSnow"}>
                  {data[0].high}
                </h4>
              </div>
              <div className="flex flex-col space-y-1">
                <span
                  className={lightMode ? "text-grayColor" : "text-grayColor"}
                >
                  24Low:
                </span>
                <h4 className={lightMode ? "text-grayColor" : "text-darkSnow"}>
                  {data[0].low}
                </h4>
              </div>
              <div className="flex flex-col space-y-1">
                <span
                  className={lightMode ? "text-grayColor" : "text-grayColor"}
                >
                  24h Volume({data[0].coin_1}):
                </span>
                <h4 className={lightMode ? "text-grayColor" : "text-darkSnow"}>
                  {data[0].vol_coin_1}
                </h4>
              </div>
              <div className="flex flex-col space-y-1">
                <span
                  className={lightMode ? "text-grayColor" : "text-grayColor"}
                >
                  24h Volume({data[0].coin_2}):
                </span>
                <h4 className={lightMode ? "text-grayColor" : "text-darkSnow"}>
                  {data[0].vol_coin_2}
                </h4>
              </div>
            </div>
          </div>

          <ExchangeChart />
        </div>

        <div className="flex flex-col space-y-4 w-full md:w-1/4 h-full">
          <Assets />
          <div
            className={`${
              lightMode ? "bg-snow" : "bg-secondarySemiDark"
            } rounded-md w-full`}
          >
            <h3
              className={`p-4 ${
                lightMode ? "text-grayColor" : "text-darkSnow"
              }`}
            >
              Assets
            </h3>

            <div
              className={`w-full border-t p-4 space-y-2 ${
                lightMode ? "border-darkSnow" : "border-secondaryLight"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={
                    lightMode ? "text-grayColor" : "text-secondaryLight"
                  }
                >{`${data[0].coin_1} Balance:`}</span>
                <span
                  className={
                    lightMode ? "text-grayColor" : "text-secondaryLight"
                  }
                >
                  -
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={
                    lightMode ? "text-grayColor" : "text-secondaryLight"
                  }
                >{`${data[0].coin_2} Balance:`}</span>
                <span
                  className={
                    lightMode ? "text-grayColor" : "text-secondaryLight"
                  }
                >
                  -
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4 w-full">
              <button className="w-32 md:w-auto border-2 border-primaryColor outline-none rounded-3xl py-1 px-4 text-primaryColor active:bg-primaryColor active:text-darkSnow active:scale-95 md:hover:bg-primaryColor md:hover:text-darkSnow">
                Deposit
              </button>

              <button
                className={`border-2 w-32 md:w-auto active:bg-secondaryLight active:text-darkSnow active:scale-95 md:hover:bg-secondaryLight md:hover:text-darkSnow ${
                  lightMode ? "border-secondaryLight" : "border-snow"
                } outline-none rounded-3xl py-1 px-4 ${
                  lightMode ? "text-dark" : "text-snow"
                }`}
              >
                Buy Crypto
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
