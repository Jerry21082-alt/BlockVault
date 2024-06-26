"use client";

import { Nav, SideBar } from "@/components/pageFiles";
import { contextFunc } from "./useStateContext/StateContext";
import SearchResults from "./SearchResults";
import NotificationPanel from "./NotificationPanel";
import Spinner from "./Spinner";
import MobileSideBar from "./MobileSideBar";
import MobileSearch from "./MobileSearch";
import MobileSearchNav from "./MobileSearchNav";
import Overlay from "./Overlay";

export default function Layout({ children }) {
  const { isLoading, lightMode } = contextFunc();
  return (
    <div className="relative">
      {isLoading && <Spinner />}
      <Nav />
      <SearchResults />
      <Overlay />
      <div className="w-[20%]">
        <SideBar />
        <MobileSideBar />
        <MobileSearchNav />
        <MobileSearch />
      </div>
      <div
        className={`absolute right-0 w-full ${
          lightMode ? "bg-darkSnow" : "bg-secondaryDark"
        } md:w-[80%] p-2 md:p-4 mt-[55px] min-h-screen layout-bg`}
      >
        {children}
      </div>
      <NotificationPanel />
    </div>
  );
}
