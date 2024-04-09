"use client";

import { useState } from "react";
import { earnCard } from "@/constants";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import StakingPools from "@/components/StakingPools";
import { contextFunc } from "@/components/useStateContext/StateContext";
import Layout from "@/components/Layout";

export default function EarnPage() {
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(4);
  const { setToggleBar, lightMode } = contextFunc();

  const handleNextCard = () => {
    if (stop === earnCard.length - 1 + 1) {
      setStart(0);
      setStop(4);
    } else {
      setStart((prev) => prev + stop);
      setStop((prev) => prev + stop);
    }
  };

  const handlePrev = () => {
    if (start === 0) {
      setStart(0);
      setStop(4);
    } else {
      setStart((prev) => prev - 4);
      setStop((prev) => prev - 4);
    }
  };

  const StakingPoolsCard = ({ icon, name, percentage, pos }) => (
    <div
      className={`p-4 ${
        lightMode ? "bg-gradient-to-tr from-dark via-skyBlue to-grayColor" : "bg-snow"
      } rounded-lg w-full p-4`}
    >
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center w-[40px]">
          <Image src={icon} alt="currency photo" />
        </div>
        <span className={`text-${lightMode ? "snow" : "secondaryDark"}`}>
          {name}
        </span>
      </div>
      <div className="flex justify-between items-center mt-5 w-[160px]">
        <h3 className={`text-${lightMode ? "snow" : "secondaryDark"}`}>{pos}</h3>
        <span className={`text-${lightMode ? "snow" : "secondaryDark"}`}>
          %{percentage}
        </span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h4 className={`text-${lightMode ? "snow" : "secondaryDark"}`}>
          Duration
        </h4>
        <h4 className={`text-${lightMode ? "snow" : "secondaryDark"}`}>
          Est.APR
        </h4>
      </div>
    </div>
  );

  return (
    <Layout>
      <div
        onClick={() => setToggleBar(false)}
        className={`w-full md:w-[80vw] bg-${lightMode ? 'darkSnow' : 'secondaryDark'}`}
      >
        <div className="flex justify-between items-center px-5">
          <h1 className={`font-bold text-${lightMode ? 'dark' : 'snow'} text-[24px] mt-5`}>
            Popular Staking Pools
          </h1>

          <div className="hidden sm:flex justify-center items-center gap-2">
            <BsArrowLeftCircleFill
              className={
                start == 0 ? "pointer-events-none" : "pointer-events-auto"
              }
              color={start == 0 ? "#463a6c" : "#7250ee"}
              size={20}
              onClick={handlePrev}
            />

            <BsArrowRightCircleFill
              className={
                stop == earnCard.length - 1 + 1
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }
              color={stop == earnCard.length - 1 + 1 ? "#463a6c" : "#7250ee"}
              size={20}
              onClick={handleNextCard}
            />
          </div>
        </div>

        <div className="media-scroller snaps w-full p-4 mt-5 md:hidden">
          {earnCard.map((card, idx) => (
            <div key={idx} className="w-full">
              <StakingPoolsCard
                icon={card.icon}
                name={card.name}
                percentage={card.rate}
                pos={card.pos}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-centet gap-[24px] p-4 mt-5">
          {earnCard.slice(start, stop).map((card, idx) => (
            <div key={idx} className="w-[250px]">
              <StakingPoolsCard
                icon={card.icon}
                name={card.name}
                percentage={card.rate}
                pos={card.pos}
              />
            </div>
          ))}
        </div>
        <div className="p-4">
          <StakingPools />
        </div>
      </div>
    </Layout>
  );
}
