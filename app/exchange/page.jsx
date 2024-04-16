"use client";

import Layout from "@/components/Layout";
import { contextFunc } from "@/components/useStateContext/StateContext";

import ExchangeChart from "@/components/ExchangeChart";
import Assets from "@/components/Assets";

export default function Exchange() {
  const { lightMode } = contextFunc();

  return (
    <>
      <Layout>
        {/* <div
          className={`exchange w-full flex flex-col md:flex-row gap-4 ${
            lightMode ? "bg-darkSnow" : "bg-secondaryDark"
          }`}
        >
          <div
            className={`w-full md:w-[70%] rounded-md ${
              lightMode ? "bg-snow" : "bg-secondarySemiDark"
            }`}
          >
            <div className={`flex flex-col gap-2 md:flex-row justify-between w-full p-4`}>
              <span
                className={`${lightMode ? "text-dark" : "text-snow"} text-xl`}
              >
                USD/TUSD
              </span>
              <div className="flex gap-5 items-center text-sm  overflow-x-auto md:overflow-x-hidden">
                <div className={`flex flex-col`}>
                  <span
                    className={`${
                      lightMode ? "text-dark" : "text-secondaryLight"
                    } font-semibold`}
                  >{`24High:`}</span>
                  <span
                    className={`${
                      lightMode ? "text-grayColor" : "text-grayColor"
                    }`}
                  >{`31,026.00`}</span>
                </div>
                <div className={`flex flex-col`}>
                  <span
                    className={`${
                      lightMode ? "text-dark" : "text-secondaryLight"
                    } font-semibold`}
                  >{`24Low:`}</span>
                  <span
                    className={`${
                      lightMode ? "text-grayColor" : "text-grayColor"
                    }`}
                  >{`29,958.67`}</span>
                </div>
                <div className={`flex flex-col`}>
                  <span
                    className={`${
                      lightMode ? "text-dark" : "text-secondaryLight"
                    } font-semibold`}
                  >{`24Volume(BTC)`}</span>
                  <span
                    className={`${
                      lightMode ? "text-grayColor" : "text-grayColor"
                    }`}
                  >{`29,958.67`}</span>
                </div>
                <div className={`flex flex-col`}>
                  <span
                    className={`${
                      lightMode ? "text-dark" : "text-secondaryLight"
                    } font-semibold`}
                  >{`24Volume(TUSD)`}</span>
                  <span
                    className={`${
                      lightMode ? "text-grayColor" : "text-grayColor"
                    }`}
                  >{`2556,858,987.01`}</span>
                </div>
              </div>
            </div>

            <div
              className={`border-t ${
                lightMode ? "border-darkSnow" : "border-secondaryLight"
              } mt-10 w-full`}
            >
              <div className="w-full md:w-[90%] p-4 relative">
                <ExchangeChart />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%]">
            <Assets />

            <div
              className={`w-full rounded-md mt-5 ${
                lightMode ? "bg-snow" : "bg-secondarySemiDark"
              }`}
            >
              <div
                className={`p-4 ${
                  lightMode ? "border-darkSnow" : "border-secondaryLight"
                } border-b`}
              >
                <h3
                  className={`${
                    lightMode ? "text-grayColor" : "text-snow"
                  } font-semibold`}
                >
                  Assets
                </h3>
              </div>
              <div className="flex items-center gap-10 p-4">
                <span className="text-grayColor">BTC Balance</span>
                <span className="text-grayColor">-</span>
              </div>

              <div className="flex items-center gap-10 p-4">
                <span className="text-grayColor">USDT Balance</span>
                <span className="text-grayColor">-</span>
              </div>

              <div className="flex items-center gap-2 p-4">
                <button
                  className={`${
                    lightMode
                      ? "border-none text-snow bg-secondaryLight"
                      : "border-primaryColor"
                  } py-2 px-4 border-2 rounded-3xl text-primaryColor text-sm outline-none`}
                >
                  Deposite
                </button>
                <button
                  className={`${
                    lightMode ? "border-none bg-grayColor" : "border-snow"
                  } w-full py-2 px-4 bg-transparent border-2 rounded-3xl text-snow text-sm outline-none`}
                >
                  Buy Crypto
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
}
