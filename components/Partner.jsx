import Image from "next/image";
import { BiSolidCart } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { visa_logo, mastCard_logo, behance_logo } from "@/public/paymentLogos";

import { paymentPartner } from "@/constants";
const length = paymentPartner.length - 1;
const lastItem = paymentPartner[length];
import { contextFunc } from "./useStateContext/StateContext";

export default function Partner({ isButtonActive, currency }) {
  const { lightMode } = contextFunc();

  const Orders = ({ currency, image, price, limit, border }) => (
    <div
      className={`flex justify-between items-center  ${border} py-4 w-full mt-5`}
    >
      <div className="flex items-center w-auto md:w-[70px]">
        <div className="flex justify-center items-center w-[40px] h-[40px]">
          <Image src={image} alt="currency photo" />
        </div>
        <span className={`text-snow`}>{currency}</span>
      </div>

      <span
        className={`text-${lightMode ? "dark" : "snow"} text-sm`}
      >{`$${price}`}</span>

      <span className={`text-${lightMode ? "dark" : "snow"} text-sm`}>
        {limit}
      </span>
      <div className="hidden md:flex items-center gap-2">
        <div className="w-[40px] flex items-center justify-center">
          <Image src={visa_logo} alt="visa card logo" />
        </div>
        <div className="w-[40px] flex items-center justify-center">
          <Image src={mastCard_logo} alt="mastercard card logo" />
        </div>
        <div className="w-[40px] flex items-center justify-center">
          <Image src={behance_logo} alt="behance logo" />
        </div>
      </div>

      <button
        className={`outline-none border border-2 ${
          lightMode ? "border-secondaryDark" : "border-snow"
        } py-2 px-4 flex gap-2 rounded-3xl ${
          lightMode ? "text-dark" : "text-snow"
        } text-sm`}
      >
        {isButtonActive.toUpperCase()}{" "}
        {isButtonActive === "buy" ? (
          <BiSolidCart size={20} color={lightMode ? "#000" : "#fff"} />
        ) : (
          <GiReceiveMoney size={20} color={lightMode ? "#000" : "#fff"} />
        )}
      </button>
    </div>
  );

  return (
    <div
      className={`mt-5 border-t border-1 border-${
        lightMode ? "darkSnow" : "grayColor"
      } p-2`}
    >
      <div className="flex justify-between items-center font-bold mt-5">
        <span className="text-grayColor"> Partner</span>
        <span className="text-grayColor">Price(USD)</span>
        <span className="text-grayColor">Limit</span>
        <span className="hidden md:block text-grayColor">Payment Methods</span>
        <span className="text-grayColor"> Operation</span>
      </div>
      {paymentPartner.map((partner, index) => (
        <Orders
          key={index}
          image={partner.currency}
          price={
            currency == "usdt"
              ? partner.price.usdt
              : currency == "usdc"
              ? partner.price.usdc
              : currency == "eth"
              ? partner.price.eth
              : currency == "btc"
              ? partner.price.btc
              : null
          }
          limit={partner.limit}
          border={
            partner === lastItem
              ? null
              : `border-b border-1 border-${
                  lightMode ? "darkSnow" : "grayColor"
                }`
          }
        />
      ))}
    </div>
  );
}
