"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsCurrencyExchange, BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { RiExchangeFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidHelpCircle, BiSolidCart } from "react-icons/bi";

import { contextFunc } from "./useStateContext/StateContext";

export default function SideBar() {
  const pathname = usePathname();

  const { toggleBar, setToggleBar, lightMode, toggleLightMode } = contextFunc();

  const inactiveLink = "flex items-center justify-start gap-2";

  const activeLink = `bg-secondaryLight font-semibold ${
    lightMode ? "bg-gradient-to-r from-violetColor  to-grayColor " : ""
  } py-2 px-4 w-full rounded-3xl ${inactiveLink}`;

  return (
    <div
      className={`w-[60%] md:w-[20vw] h-screen bg-${
        lightMode ? "snow" : "secondarySemiDark"
      } z-10 overflow-y-auto fixed top-0 left-0${
        !toggleBar
          ? "transform translate-x-[-100%] md:translate-x-0 transition-all"
          : "translate-x-0 transition-all"
      }`}
    >
      <div className="flex items-start flex-col px-4 gap-10 mt-[5rem]">
        <Link
          onClick={() => setToggleBar(false)}
          href={`/home`}
          className={pathname == "/home" ? activeLink : inactiveLink}
        >
          <AiFillHome color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Market
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/buyCrypto`}
          className={pathname == "/buyCrypto" ? activeLink : inactiveLink}
        >
          <BiSolidCart color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Buy Crypto
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/swap`}
          className={pathname == "/swap" ? activeLink : inactiveLink}
        >
          <BsCurrencyExchange color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Swap
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/exchange`}
          className={pathname == "/exchange" ? activeLink : inactiveLink}
        >
          <RiExchangeFill color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Exchange
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/earn`}
          className={pathname == "/earn" ? activeLink : inactiveLink}
        >
          <GiReceiveMoney color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Earn
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/setting`}
          className={pathname == "/setting" ? activeLink : inactiveLink}
        >
          <AiFillSetting color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Settings
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/help`}
          className={pathname == "/help" ? activeLink : inactiveLink}
        >
          <BiSolidHelpCircle color={lightMode ? '#463a6c' : '#8b86a1'} size={20} />
          <h4
            className={`text-${activeLink && lightMode ? "dark" : "grayColor"}`}
          >
            Help
          </h4>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-2 mt-10 pb-2">
        <BsSunFill color={lightMode ? "#7250ee" : "#8b86a1"} />
        <div className={`flex items-center justify-end bg-${lightMode ? 'darkSnow' : 'secondaryLight'} rounded-3xl w-[40px] h-[25px] p-1`}>
          <div
            onClick={toggleLightMode}
            className={`rounded-full w-[20px] h-[20px] transform bg-primaryColor cursor-pointer ${
              lightMode
                ? "translate-x-[-60%] transition-all"
                : "translate-x-0 transition-all"
            }`}
          />
        </div>
        <BsMoonStarsFill color={lightMode ? "#8b86a1" : "#7250ee"} />
      </div>
    </div>
  );
}
