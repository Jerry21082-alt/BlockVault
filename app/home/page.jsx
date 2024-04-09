"use client";

import { exchangeCard } from "@/constants";
import Image from "next/image";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import Market from "@/components/Market";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";

import { contextFunc } from "@/components/useStateContext/StateContext";

export default function HomePage() {
  const { lightMode } = contextFunc();

  const CardChart = ({
    icon,
    name,
    currentPrice,
    point,
    arrow,
    chart,
    gain,
    style,
  }) => (
    <div
      className={`p-2 ${
        lightMode ? "bg-snow" : "bg-secondarySemiDark"
      } rounded-lg`}
    >
      <div className="flex items-center justify-between w-[160px] md:w-[165px] xl:w-[216px]">
        <div className="flex gap-1 items-center">
          <div className="flex items-center justify-center w-[30px]">
            <Image src={icon} alt="currency photo" />
          </div>
          <span
            className={`text-${
              lightMode ? "secondaryLight" : "darkSnow"
            } text-sm`}
          >
            {name.toUpperCase()}
          </span>
        </div>

        <div
          className={`flex justify-center items-center rounded-md bg-grayColor text-${
            lightMode ? "snow" : "secondaryDark"
          } p-2 w-[40px] h-[20px] text-xs`}
        >
          24H
        </div>
      </div>
      <h3 className={`text-${lightMode ? "dark" : "snow"} text-xl mt-10`}>
        ${currentPrice}
      </h3>
      <div className="flex items-center gap-2">
        <h3 className={style}>
          {!gain ? "-" : "+"} {point}%
        </h3>
        <div>{arrow}</div>
      </div>
      <div className="w-full mt-10">{chart}</div>
    </div>
  );

  return (
    <Layout>
      <div className={`${lightMode ? "bg-darkSnow" : "bg-secondaryDark"}`}>
        <div className="w-full flex gap-5 overflow-x-auto md:overflow-x-hidden p-4">
          {exchangeCard.map((card, index) => (
            <CardChart
              key={index}
              icon={card.icon}
              name={card.name}
              currentPrice={card.currentPrice}
              gain={card.position.gain}
              style={
                card.position.gain
                  ? "mt-2 font-bold text-greenColor text-sm"
                  : "mt-2 font-bold text-dangerColor text-sm"
              }
              point={card.position.point}
              arrow={
                card.position.gain ? (
                  <BsGraphUpArrow
                    color={card.position.gain ? "#008000" : null}
                    size={20}
                  />
                ) : (
                  <BsGraphDownArrow
                    color={!card.position.gain ? "#ff0000" : null}
                    size={20}
                  />
                )
              }
            />
          ))}
        </div>
        <div className="p-4">
          <Dashboard />
          <Market />
        </div>
      </div>
    </Layout>
  );
}
