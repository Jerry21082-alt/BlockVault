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

  const { toggleBar, setToggleBar, lightMode, setLightMode } = contextFunc();

  const inactiveLink = "flex items-center justify-start gap-2";

  const activeLink = `bg-gradient-to-r from-violetColor to-grayColor text-dark py-2 px-4 w-full rounded-3xl ${inactiveLink}`;

  return (
    <div
      className={`side-bar w-[60%] md:w-[20vw] h-screen z-10 overflow-y-auto fixed top-0 left-0${
        !toggleBar
          ? "transform translate-x-[-100%] md:translate-x-0 transition-all"
          : "translate-x-0 transition-all"
      } ${lightMode ? "bg-snow" : "bg-secondarySemiDark"}`}
    >
      <div
        className={`flex items-start flex-col px-4 space-y-10 mt-20 ${
          lightMode ? "text-grayColor" : null
        }`}
      >
        <Link
          onClick={() => setToggleBar(false)}
          href="/"
          className={pathname == "/" ? activeLink : inactiveLink}
        >
          <AiFillHome color={lightMode ? "#463a6c" : "#8b86a1"} size={20} />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Market
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/buyCrypto`}
          className={pathname == "/buyCrypto" ? activeLink : inactiveLink}
        >
          <BiSolidCart color={lightMode ? "#463a6c" : "#8b86a1"} size={20} />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Buy Crypto
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/swap`}
          className={pathname == "/swap" ? activeLink : inactiveLink}
        >
          <BsCurrencyExchange
            color={lightMode ? "#463a6c" : "#8b86a1"}
            size={20}
          />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Swap
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/exchange`}
          className={pathname == "/exchange" ? activeLink : inactiveLink}
        >
          <RiExchangeFill color={lightMode ? "#463a6c" : "#8b86a1"} size={20} />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Exchange
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/earn`}
          className={pathname == "/earn" ? activeLink : inactiveLink}
        >
          <GiReceiveMoney color={lightMode ? "#463a6c" : "#8b86a1"} size={20} />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Earn
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/setting`}
          className={pathname == "/setting" ? activeLink : inactiveLink}
        >
          <AiFillSetting color={lightMode ? "#463a6c" : "#8b86a1"} size={20} />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Settings
          </h4>
        </Link>

        <Link
          onClick={() => setToggleBar(false)}
          href={`/help`}
          className={pathname == "/help" ? activeLink : inactiveLink}
        >
          <BiSolidHelpCircle
            color={lightMode ? "#463a6c" : "#8b86a1"}
            size={20}
          />
          <h4 className={activeLink && lightMode ? "dark" : "text-darkSnow"}>
            Help
          </h4>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-2 mt-10 pb-2">
        <BsSunFill color={lightMode ? "#7250ee" : "#8b86a1"} />
        <button
          type="button"
          className={`flex items-center justify-end bg-${
            lightMode ? "darkSnow" : "secondaryLight"
          } rounded-3xl w-[40px] h-[25px] p-1`}
        >
          <div
            onClick={() => setLightMode((prev) => !prev)}
            className={`rounded-full w-[20px] h-[20px] transform bg-primaryColor cursor-pointer ${
              lightMode ? "set-light-mode" : "set-dark-mode"
            }`}
          />
        </button>
        <BsMoonStarsFill color={lightMode ? "#8b86a1" : "#7250ee"} />
      </div>
    </div>
  );
}
