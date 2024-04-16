"use client";

import { exchangeCard } from "@/constants";
import Image from "next/image";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import Market from "@/components/Market";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import { contextFunc } from "@/components/useStateContext/StateContext";

export default function Page() {
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
      className={`cards p-4 w-52 md:w-full ${
        lightMode ? "bg-snow shadow-md" : "bg-secondarySemiDark"
      } rounded-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-[30px]">
            <Image src={icon} alt="currency photo" />
          </div>
          <span
            className={`ml-2 text-${
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
      <h3 className={`text-${lightMode ? "dark" : "snow"} mt-10`}>
        ${currentPrice}
      </h3>
      <div className="flex items-center gap-2">
        <h3 className={`${style} mt-2 font-bold text-sm`}>
          {!gain ? "-" : "+"} {point}%
        </h3>
        <div>{arrow}</div>
      </div>
      <div className="w-full h-12 mt-10">
        <Image src={chart} alt="position chart" width={500} height={500} />
      </div>
    </div>
  );

  return (
    <Layout>
      <div className={`home ${lightMode ? "bg-darkSnow" : "bg-secondaryDark"}`}>
        <div className="w-full flex gap-4 overflow-x-auto md:overflow-x-hidden mt-2">
          {exchangeCard.map((card, index) => (
            <div key={index} className="aspect-square w-96">
              <CardChart
                icon={card.icon}
                name={card.name}
                currentPrice={card.currentPrice}
                gain={card.position.gain}
                chart={
                  card.position.gain
                    ? "/crypto_coin_svg/cuurvesss 1.png"
                    : "/crypto_coin_svg/cuurvesss 2.png"
                }
                style={
                  card.position.gain
                    ? lightMode
                      ? "text-greenColor"
                      : "text-brightGreen"
                    : "text-dangerColor"
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
            </div>
          ))}
        </div>
        <Dashboard />
        <Market />
      </div>
    </Layout>
  );
}
