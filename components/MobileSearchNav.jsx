import React from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function MobileSearchNav() {
  const {
    openMobileSearch,
    setOpenMobileSearch,
    searchInput,
    setSearchInput,
    updateBestMatches,
    lightMode
  } = contextFunc();

  return (
    <div
      className={`${
        openMobileSearch ? "open-mobile-search_nav" : "close-mobile-search_nav"
      } fixed flex md:hidden items-center right-0 left-0 h-14 w-screen z-[400] bg-secondaryDark p-2`}
    >
      <div className="flex items-center space-x-3 justify-between w-full">
        <div className={`border rounded-3xl flex items-center overflow-hidden pr-1 ${lightMode ? 'border-grayColor' : 'border-darkSnow'}`}>
          <input
            type=""
            placeholder="Search"
            value={searchInput}
            onChange={(ev) => setSearchInput(ev.target.value)}
            className="bg-secondaryDark outline-none p-2 text-snow rounded-l-3xl w-2/3"
          />

          <button
            className="w-24 py-1 px-4 text-snow bg-primaryColor rounded-3xl"
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
