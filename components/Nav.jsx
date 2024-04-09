"use client";

import { useState } from "react";
import { RiSearchFill } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { IoIosNotifications, IoIosWallet } from "react-icons/io";
import { contextFunc } from "./useStateContext/StateContext";
import Link from "next/link";

export default function Nav() {
  const { setToggleBar, searchInput, setSearchInput, updateBestMatches,setSearchFocus, setActiveSearch, setToggleNotification, lightMode } =
    contextFunc();

  return (
    <div className={`fixed top-0 w-screen bg-${lightMode ? 'snow' : 'secondaryDark'} flex justify-between items-center py-2 px-4 z-[20] shadow-md`}>
      <div className="flex items-center gap-5">
        <div
          onClick={() => setToggleBar((prev) => !prev)}
          className={`bg-grayColor rounded-md p-1`}
        >
          <HiMenuAlt4 color={lightMode ? "#1f183e" : '#fff'} size={20} />
        </div>

        <div className={`w-[200px] flex justify-start items-center bg-${lightMode ? 'snow' : 'secondarySemiDark'} py-2 px-4 text-grayColor rounded-3xl gap-2 border-grayColor border-2`}>
          <input
            className={`outline-none border-none bg-${lightMode ? "snow" : "secondarySemiDark"} w-full`}
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <RiSearchFill size={20} onClick={updateBestMatches} color={lightMode ? '#8b86a1' : null}/>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <IoIosNotifications onClick={() => setToggleNotification((prev) => !prev)} color='#8b86a1' size={20} cursor={`pointer`}/>
        <BiSolidUser color='#8b86a1' size={20} cursor={`pointer`}/>
        <Link href={`/wallet`} className="block md:hidden">
          <IoIosWallet color='#8b86a1' size={20} />
        </Link>
        <Link href={`/wallet`} className="hidden md:flex justify-center items-center bg-primaryColor w-[150px] rounded-3xl py-2 px-4">
          <div className="flex items-center gap-2">
            <h3 className={`${lightMode ? 'text-snow' : 'text-snow'} text-sm`}>Your Wallet</h3>
            <IoIosWallet color='#fff' size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}
