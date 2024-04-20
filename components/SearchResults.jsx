import { useEffect, useRef, useState } from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function SearchResults() {
  const { bestMatches, setStockSymbol, searchInput, setSearchInput } =
    contextFunc();

  useEffect(() => {
    const closeSearchBox = (ev) => {
      if (ev.key === "Escape") {
        setSearchInput("");
      }
    };

    document.addEventListener("keydown", closeSearchBox);

    return () => document.removeEventListener("keydown", closeSearchBox);
  }, []);

  return (
    <div
      className={`w-[300px] h-[300px] hidden md:block p-2 rounded-lg search-result text-snow fixed top-14 left-0 lg:left-44 xl:left-56 z-[100] overflow-y-auto ${
        searchInput.length ? "open-search-result" : "close-search-result"
      }`}
    >
      {bestMatches.map((match, index) => (
        <div
          key={index}
          onClick={() => setStockSymbol(match?.symbol || match)}
          className={`flex items-center justify-between hover:bg-primaryColor my-2 p-4 rounded-md z-50 group data-query cursor-pointer`}
        >
          {/* <span className="text-snow text-sm">{match?.symbol || match}</span> */}
          <span
            className="text-snow text-sm group-hover:ml-1"
            onClick={() => setSearchInput("")}
          >
            {match.description?.length > 80 || match > 80
              ? `${match?.description.slice(0, 80)}...`
              : match?.description || match}
          </span>
        </div>
      ))}
    </div>
  );
}
