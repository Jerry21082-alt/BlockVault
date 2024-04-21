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
      <section className="w-full min-h-screen flex flex-col md:flex-row items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div className="h-full w-full md:w-3/4 bg-secondarySemiDark rounded-md p-4">
          <div className="flex items-center justify-between space-x-2 w-full">
            <h1 className="text-darkSnow">{`${data[0].coin_1}/${data[0].coin_2}`}</h1>
            <div className="flex items-center justify-between space-x-8 hidden">
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

        <Assets />
      </section>
    </Layout>
  );
}
