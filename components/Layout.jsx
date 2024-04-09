"use client";

import { Nav, SideBar } from "@/components/pageFiles";
import { contextFunc } from "./useStateContext/StateContext";
import SearchResults from "./SearchResults";
import NotificationPanel from "./NotificationPanel";
import Spinner from "./Spinner";

export default function Layout({ children }) {
  const { searchInput, lightMode, isLoading } = contextFunc();
  return (
    <>
      {isLoading && <Spinner />}
      <Nav />
      {searchInput && <SearchResults />}
      <div className="flex mt-[3.5rem] w-screen">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className={`${lightMode ? 'bg-darkSnow' : 'bg-secondaryDark'} absolute right-0 w-full h-full md:w-[80%]`}>{children}</div>
      </div>
      <NotificationPanel />
    </>
  );
}
