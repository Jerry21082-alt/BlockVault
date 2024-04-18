import React from "react";
import { contextFunc } from "./useStateContext/StateContext";
import { wallet } from "@/constants";
import { IoIosWallet } from "react-icons/io";

export default function WalletSection() {
  const { setToggleBar, lightMode } = contextFunc();
  const indexOfLastItem = wallet.length - 1;
  const _getLastItem = wallet[indexOfLastItem];

  return (
    <div
      className={`w-full lg:w-[35vw] ${
        lightMode ? "bg-snow" : "bg-secondarySemiDark"
      } rounded-md p-3`}
    >
      <div
        className={`w-full border-b ${
          lightMode ? "border-darkSnow" : "border-secondaryLight"
        }`}
      >
        <h3 className={`${lightMode ? "text-dark" : "text-snow"} my-2`}>
          Your Wallet
        </h3>
      </div>

      {wallet.map((wallet, index) => (
        <div
          key={index}
          className={`flex justify-start items-center  ${
            wallet === _getLastItem
              ? null
              : lightMode
              ? "border-darkSnow border-b"
              : "border-secondaryLight border-b"
          } py-3 space-x-4`}
        >
          <div className="w-[40px]">
            <div dangerouslySetInnerHTML={{ __html: wallet.currency }}></div>
          </div>

          <div className="flex items-start flex-col space-y-2">
            <div>
              <p className={`${lightMode ? "text-dark" : "text-snow"}`}>
                {wallet.currencyName}
              </p>
              <p className={`text-xs ${lightMode ? "text-dark" : "text-snow"}`}>
                {wallet.rate}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-24 border-2 border-primaryColor outline-none rounded-3xl py-1 px-4 text-primaryColor active:bg-primaryColor active:text-darkSnow active:scale-95">
                Send
              </button>
              <button
                className={`border-2 w-24 active:bg-secondaryLight active:text-darkSnow active:scale-95 ${
                  lightMode ? "border-secondaryLight" : "border-snow"
                } outline-none rounded-3xl py-1 px-4 ${
                  lightMode ? "text-dark" : "text-snow"
                }`}
              >
                Recieve
              </button>
            </div>
          </div>
        </div>
      ))}

      <button className="w-full flex justify-center items-center bg-primaryColor text-snow mt-12 py-2 px-4 rounded-3xl gap-2 hover:bg-secondaryLight">
        <span>Connect Wallet</span>
        <div className="w-6 h-6 flex items-center justify-center">
          <IoIosWallet size={20} />
        </div>
      </button>
    </div>
  );
}
