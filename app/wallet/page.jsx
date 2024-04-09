"use client";

import Image from "next/image";
import React from "react";
import { IoIosWallet } from "react-icons/io";
import RecentActivity from "@/components/RecentActivity";
import { contextFunc } from "@/components/useStateContext/StateContext";
import { wallet } from "@/constants";
import Layout from "@/components/Layout";

export default function Wallet() {
  const { setToggleBar, lightMode } = contextFunc();
  const indexOfLastItem = wallet.length - 1;
  const _getLastItem = wallet[indexOfLastItem];

  const WalletHistory = ({ image, wallet, rate, borderStyle }) => (
    <div
      className={`flex justify-start items-center gap-[2rem] ${borderStyle} py-3 gap-5`}
    >
      <div className="w-[40px]">
        <Image src={image} alt="bitcoin photo" />
      </div>

      <div className="flex items-start flex-col gap-2">
        <div>
          <p className={`${lightMode ? 'text-dark' : 'text-snow'}`}>{wallet}</p>
          <p className={`text-xs ${lightMode ? 'text-dark' : 'text-snow'}`}>{rate}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-2 border-primaryColor outline-none rounded-3xl py-1 px-4 text-primaryColor">
            Send
          </button>
          <button className={`border border-2 ${lightMode ? 'border-grayColor' : 'border-snow'} outline-none rounded-3xl py-1 px-4 ${lightMode ? 'text-dark' : 'text-snow'}`}>
            Recieve
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div
        onClick={() => setToggleBar(false)}
        className={`p-4 ${lightMode ? "bg-darkSnow" : "bg-secondaryDark"}`}
      >
        <h1 className={`text-xl font-bold ${lightMode ? 'text-dark' : 'text-snow'}`}>Your Wallet</h1>

        <div className="w-full h-full md:h-[600px] flex flex-col md:flex-row justify-start items-start gap-[24px] mt-5">
          <div className={`w-full h-full md:w-[40vw] ${lightMode ? 'bg-snow' : 'bg-secondarySemiDark'} rounded-md p-3`}>
            <div className={`w-full border-b ${lightMode ? 'border-darkSnow' : 'border-grayColor'}`}>
              <h3 className={`${lightMode ? 'text-dark' : 'text-snow'} my-2`}>Your Wallet</h3>
            </div>

            {wallet.map((wallet, index) => (
              <WalletHistory
                key={index}
                image={wallet.currency}
                rate={wallet.rate}
                wallet={`${wallet.currencyName} Wallet`}
                borderStyle={
                  wallet == _getLastItem ? "" : `border-b ${lightMode ? 'border-darkSnow' : 'border-grayColor'}`
                }
              />
            ))}

            <button className="w-full flex justify-center items-center bg-primaryColor text-snow mt-10 py-2 px-4 rounded-3xl gap-2">
              Connect Wallet <IoIosWallet />
            </button>
          </div>
          <RecentActivity />
        </div>
      </div>
    </Layout>
  );
}
