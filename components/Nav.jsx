"use client";

import { RiSearchFill } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { IoIosNotifications, IoIosWallet } from "react-icons/io";
import { contextFunc } from "./useStateContext/StateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const {
    setToggleBar,
    toggleBar,
    searchInput,
    setSearchInput,
    updateBestMatches,
    setToggleNotification,
    lightMode,
  } = contextFunc();

  const pathname = usePathname();

  return (
    <div
      className={`nav fixed top-0 w-screen bg-${
        lightMode ? "snow" : "secondaryDark"
      } flex justify-between items-center py-2 px-4 z-50 shadow-md h-14`}
    >
      <div className="flex items-center space-x-10 lg:space-x-28">
        <div className="flex items-center space-x-5">
          <div
            onClick={() => setToggleBar((prev) => !prev)}
            className={`bar ${toggleBar ? 'bar-open' : 'bar-closed'} bg-grayColor rounded-md p-1 h-6 flex flex-col space-y-1 items-center justify-center`}  
          >
            <div
              style={{ backgroundColor: lightMode ? "#1f183e" : "#fff" }}
            />

            <div
              style={{ backgroundColor: lightMode ? "#1f183e" : "#fff" }}
            />
          </div>

          <div
            className={`logo text-lg ${lightMode ? "text-dark" : "text-snow"}`}
          >
            <Link href="/">
              <h2>CryptoVerse</h2>
            </Link>
          </div>
        </div>

        <div
          className={`hidden w-52 md:flex justify-start items-center ${
            lightMode ? "bg-secondaryLight" : "bg-secondarySemiDark"
          } py-2 px-4 text-grayColor rounded-3xl gap-2 border-grayColor border-2`}
        >
          <input
            className={`outline-none border-none w-full text-darkSnow`}
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="flex items-center">
            <button
              onClick={() => setSearchInput("")}
              className={`flex items-center justify-center w-5 h-5 rounded p-1 cursor-pointer active:scale-95 ${
                searchInput.length ? "show-close" : "hide-close"
              } ${lightMode ? "hover:bg-grayColor" : "hover:bg-primaryColor"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
                fill={lightMode ? "#000" : "#fff"}
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
              </svg>
            </button>
          </div>
          <RiSearchFill
            size={20}
            onClick={updateBestMatches}
            color={lightMode ? "#8b86a1" : null}
            cursor="pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-3">
        <IoIosNotifications
          onClick={() => setToggleNotification((prev) => !prev)}
          color="#8b86a1"
          size={20}
          cursor={`pointer`}
        />
        <BiSolidUser color="#8b86a1" size={20} cursor={`pointer`} />

        {/* <Link href={`/wallet`} className="block md:hidden">
          <IoIosWallet color="#8b86a1" size={20} />
        </Link> */}

        <Link
          href={`/wallet`}
          className={`hidden md:flex justify-center items-center w-[150px] rounded-3xl py-2 px-4 ${
            pathname === "/wallet"
              ? "bg-gradient-to-r from-violetColor to-grayColor text-dark"
              : "bg-primaryColor"
          }`}
        >
          <div className="flex items-center space-x-2">
            <h3 className={`${lightMode ? "text-snow" : "text-snow"} text-sm`}>
              Your Wallet
            </h3>
            <IoIosWallet color="#fff" size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}
