"use client";

import { exchangeCard } from "@/constants";
import Image from "next/image";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import Market from "@/components/Market";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import { contextFunc } from "@/components/useStateContext/StateContext";
import { getTimesStamps } from "@/helpers/timeStamps";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const { lightMode } = contextFunc();
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientWidth * 1 / 1);
  }, [ref]);

  return (
    <Layout>
      <div className={`home ${lightMode ? "bg-darkSnow" : "bg-secondaryDark"}`}>
        <div className="flex-container w-full h-full items-center overflow-x-scroll mt-2">
          {exchangeCard.map((card, index) => (
            <div
              key={index}
              className={`aspect-square w-56 h-64 md:w-full md:h-auto rounded-lg flex-item p-4 ${
                lightMode ? "bg-snow" : "bg-secondarySemiDark"
              }`}
              style={{ height: `${height}px` }}
              ref={ref}
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8">
                    <div dangerouslySetInnerHTML={{ __html: card.icon }} />
                  </div>
                  <span
                    className={
                      lightMode ? "text-secondaryDark" : "text-darkSnow"
                    }
                  >
                    {card.name.toUpperCase()}
                  </span>
                </div>

                <div className="bg-grayColor flex items-center justify-center w-10 h-5 rounded">
                  <span
                    className={
                      lightMode ? "text-darkSnow" : "text-secondaryDark"
                    }
                  >
                    24
                  </span>
                </div>
              </div>

              <h1
                className={`mt-5 ${
                  lightMode ? "text-secondaryDark" : "text-darkSnow"
                }`}
              >
                {`$${card.currentPrice}`}
              </h1>

              <div className="flex items-center space-x-2">
                <h4
                  className={`mt-2 ${
                    card.position.gain
                      ? lightMode
                        ? "text-greenColor"
                        : "text-brightGreen"
                      : "text-dangerColor"
                  }`}
                >{`${card.position.gain ? "+" : "-"}${
                  card.position.point
                }%`}</h4>

                <div className="w-4 h-4">
                  {card.position.gain ? (
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={lightMode ? "#3CB371" : "#00FF00"}
                    >
                      <title>arrow_circle_up</title>
                      <path d="M12 20.016q-1.641 0-3.094-0.633t-2.555-1.734-1.734-2.555-0.633-3.094 0.633-3.094 1.734-2.555 2.555-1.734 3.094-0.633 3.094 0.633 2.555 1.734 1.734 2.555 0.633 3.094-0.633 3.094-1.734 2.555-2.555 1.734-3.094 0.633zM12 21.984q2.063 0 3.867-0.773t3.188-2.156 2.156-3.188 0.773-3.867-0.773-3.867-2.156-3.188-3.188-2.156-3.867-0.773-3.867 0.773-3.188 2.156-2.156 3.188-0.773 3.867 0.773 3.867 2.156 3.188 3.188 2.156 3.867 0.773v0zM11.016 12v3.984h1.969v-3.984h3l-3.984-3.984-3.984 3.984h3z"></path>
                    </svg>
                  ) : (
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FF0000"
                    >
                      <title>arrow_circle_down</title>
                      <path d="M12 3.984q1.641 0 3.094 0.633t2.555 1.734 1.734 2.555 0.633 3.094-0.633 3.094-1.734 2.555-2.555 1.734-3.094 0.633-3.094-0.633-2.555-1.734-1.734-2.555-0.633-3.094 0.633-3.094 1.734-2.555 2.555-1.734 3.094-0.633zM12 2.016q-2.063 0-3.867 0.773t-3.188 2.156-2.156 3.188-0.773 3.867 0.773 3.867 2.156 3.188 3.188 2.156 3.867 0.773 3.867-0.773 3.188-2.156 2.156-3.188 0.773-3.867-0.773-3.867-2.156-3.188-3.188-2.156-3.867-0.773v0zM12.984 12v-3.984h-1.969v3.984h-3l3.984 3.984 3.984-3.984h-3z"></path>
                    </svg>
                  )}
                </div>
              </div>
              <div className="w-full h-16 mt-8">
                <Image
                  src={
                    card.position.gain
                      ? "/crypto_coin_svg/cuurvesss 2.png"
                      : "/crypto_coin_svg/cuurvesss 1.png"
                  }
                  width={500}
                  height={500}
                  alt="chart position"
                />
              </div>
            </div>
          ))}
        </div>
        <Dashboard />
        <Market />
      </div>
    </Layout>
  );
}
