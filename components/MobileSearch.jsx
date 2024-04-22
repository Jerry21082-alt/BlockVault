import { mockDataQuery } from "@/constants";
import React from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function MobileSearch() {
  const {
    openMobileSearch,
    setOpenMobileSearch,
    bestMatches,
    setStockSymbol,
    lightMode,
  } = contextFunc();

  const handleQueryClicked = (query) => {
    setStockSymbol(query?.symbol || query);
    setOpenMobileSearch(false);
  };

  return (
    <div
      style={{ backgroundColor: lightMode ? "#F5F5F5" : "#251c4c" }}
      className={`fixed top-14 left-0 right-0 h-screen w-screen block md:hidden z-[300] p-2 ${
        openMobileSearch ? "open-mobile-search" : "close-mobile-search"
      }`}
    >
      <div className="w-full max-h-[600px] overflow-y-scroll">
        <ul className="m-0 flex flex-col w-full mt-4">
          {bestMatches.map((query, idx) => (
            <li
            style={{color: lightMode ? '#8b86a1' : '#e9eedf'}}
              key={idx}
              onClick={() => handleQueryClicked(query)}
              className="flex items-center justify-between hover:bg-primaryColor my-1 p-4 rounded-md z-50 group data-query cursor-pointer"
            >
              {query.description?.length > 80 || query > 80
                ? `${query?.description.slice(0, 80)}...`
                : query?.description || query}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
