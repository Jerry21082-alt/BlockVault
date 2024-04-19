"use client";

import { useState, useEffect } from "react";
import DisplayChart from "./DisplayChart";
import { contextFunc } from "./useStateContext/StateContext";
import { fetchStockDetails, fetchStockQuotes } from "@/utils/data";

export default function Dashboard() {
  const [stockDetails, setStockDetails] = useState([]);
  const [quotes, setQuotes] = useState({});

  const { stockSymbol, lightMode, setIsLoading } = contextFunc();

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        setIsLoading(true);
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (err) {
        setStockDetails([]);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    const updateStockOverview = async () => {
      try {
        setIsLoading(true);
        const result = await fetchStockQuotes(stockSymbol);
        setQuotes(result);
      } catch (err) {
        setQuotes([]);
      } finally {
        setIsLoading(false);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div className="w-full h-full md:h-[70vh] flex flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0 md:flex-row mt-4 dashboard-items">
      <DisplayChart stockDetails={stockDetails} />

      <div
        className={`dashboard mr-0 md:mr-4 md:mt-0 bg-${
          lightMode ? "snow" : "secondarySemiDark"
        } rounded-lg p-4 w-full h-[70vh] md:w-[30%] md:block`}
      >
        <div
          className={`w-full border-b border-solid border-${
            lightMode ? "darkSnow" : "secondaryLight"
          }`}
        >
          <span className="text-grayColor font-bold text-lg">
            {stockDetails.name}
          </span>
          <div className="flex justify-between items-center mt-5 my-2">
            <div>
              <span className={`text-${lightMode ? "dark" : "snow"}`}>
                ${quotes.pc}
              </span>{" "}
              <span className="text-grayColor text-sm">
                {stockDetails.currency}
              </span>
            </div>
            <span
              className={`${
                quotes.dp > quotes.c
                  ? lightMode
                    ? "text-greenColor"
                    : "text-brightGreen"
                  : "text-dangerColor"
              } text-sm`}
            >
              {quotes.d}(%{quotes.dp})
            </span>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center py-3">
            <span className="text-grayColor text-sm">Name</span>
            <span className="text-grayColor text-xs">
              {stockDetails.name?.length > 20
                ? `${stockDetails.name.substring(0, 20)}...`
                : stockDetails.name}
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-grayColor text-sm">Country</span>
            <span className="text-grayColor text-xs">
              {stockDetails.country}
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-grayColor text-sm">Currency</span>
            <span className="text-grayColor text-xs">
              {stockDetails.currency}
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span
              className={`text-grayColor ${
                stockDetails.exchange?.length > 20 ? "hidden" : null
              }`}
            >
              Exchange
            </span>
            <span className="text-grayColor text-xs">
              {stockDetails.exchange}
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-grayColor text-sm">IPO date</span>
            <span className="text-grayColor text-xs">{stockDetails.ipo}</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-grayColor text-sm">
              Market capitalization
            </span>
            <span className="text-grayColor text-xs">
              {stockDetails.marketCapitalization}
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-grayColor text-sm">Industry</span>
            <span className="text-grayColor text-xs">
              {stockDetails.finnhubIndustry}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
