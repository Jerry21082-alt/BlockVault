"use client";

import React from "react";
import RecentActivity from "@/components/RecentActivity";
import WalletSection from "@/components/WalletSection";
import { contextFunc } from "@/components/useStateContext/StateContext";
import Layout from "@/components/Layout";

export default function Wallet() {
  const { setToggleBar, lightMode } = contextFunc();

  return (
    <Layout>
      <h1 className={lightMode ? "text-dark" : "text-darkSnow"}>Your Wallet</h1>
      <h4 className={`mt-3 ${lightMode ? "text-dark" : "text-darkSnow"}`}>
        Popular Staking Pools
      </h4>
      <section className="flex flex-col md:flex-row w-full mt-4 overflow-auto md:overflow-hidden wallet">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <WalletSection />
          <RecentActivity />
        </div>
      </section>
    </Layout>
  );
}
