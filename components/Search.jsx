import { useState } from "react";
import { marketDetails } from "@/constants";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-[96%] bg-snow border-grayColor">
      <input
        type="text"
        value={searchInput}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="search stock.."
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {searchInput && bestMatches.length > 0 ? <SearchResults results={bestMatches}/> : null}
    </div>
  );
}
