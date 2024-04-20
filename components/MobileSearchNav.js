import React from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function MobileSearchNav() {
  const {
    openMobileSearch,
    setOpenMobileSearch,
    searchInput,
    setSearchInput,
    updateBestMatches
  } = contextFunc();

  return (
    <div
      className={`${
        openMobileSearch ? "open-mobile-search_nav" : "close-mobile-search_nav"
      } fixed flex md:hidden items-center right-0 left-0 h-14 w-screen z-[400] bg-secondaryDark p-2`}
    >
      <div className="flex items-center space-x-3 justify-between w-full">
        <div className="flex items-center w-full space-x-2 rounded-3xl border-2 border-grayColor py-2 h-8 overflow-hidden pl-2">
          <input
            type=""
            placeholder="Search"
            value={searchInput}
            onChange={(ev) => setSearchInput(ev.target.value)}
            className="bg-secondaryDark outline-none p-2 text-snow"
          />

          <button
            className="w-full h-8 text-snow bg-primaryColor"
            onClick={updateBestMatches}
          >
            Search
          </button>
        </div>
        <h4
          className="text-primaryColor"
          onClick={() => setOpenMobileSearch(false)}
        >
          Cancel
        </h4>
      </div>
    </div>
  );
}
