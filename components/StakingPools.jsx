import { stakingPool } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function StakingPools() {
  const { lightMode } = contextFunc();

  const [filterBtn, setFilterBtn] = useState("All");

  const [poolItems, setPoolsItems] = useState([...stakingPool]);

  const maxLength = poolItems.length - 1;

  const allElement = [...stakingPool];

  const updatePoolSubcription = (id) => {
    const coin = poolItems[id];
    const updatedCoin = poolItems.map((pool) => {
      if (pool === coin) {
        return { ...pool, isSub: !pool.isSub };
      }

      return pool;
    });

    setPoolsItems(updatedCoin);
  };

  const filterSub = (array, func) => {
    const newArray = [];

    for (let element of array) {
      if (func(element)) {
        newArray.push(element);
      }
    }

    setPoolsItems(newArray);
    setFilterBtn("Staking");
  };

  const filterAll = (allArray, func) => {
    const allElement = [];

    for (let element of allArray) {
      if (func(element)) {
        allElement.push(element);
      }
    }

    setPoolsItems(allElement);
    setFilterBtn("All");
  };

  const Stakes = ({ icon, name, pos, percentage, isSub }) => (
    <div className="flex justify-between w-[80%] items-center">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-[40px]">
          <Image src={icon} alt="currency photo" />
        </div>
        <span className={`text-${lightMode ? "dark" : "snow"} hidden md:block`}>{name}</span>
      </div>

      <span className={`text-${lightMode ? "dark" : "snow"}`}>{pos}</span>
      <span className={`text-${lightMode ? "dark" : "snow"}`}>
        {percentage}
      </span>
      <span className={`text-${lightMode ? "dark" : "snow"} hidden md:block`}>
        Saving
      </span>
    </div>
  );

  return (
    <div
      className={`bg-${
        lightMode ? "snow" : "secondarySemiDark"
      } p-4 rounded-md h-full`}
    >
      <div className="flex items-center">
        <button
          onClick={() => filterAll(allElement, (elements) => elements)}
          className={`outline-none border-none bg-${
            filterBtn == "All" ? "primaryColor" : "secondaryLight"
          } rounded-l-3xl py-2 px-4 text-darkSnow w-[100px]`}
        >
          All
        </button>

        <button
          onClick={() =>
            filterSub(poolItems, (element) => element.isSub === true)
          }
          className={`outline-none border-none bg-${
            filterBtn == "Staking" ? "primaryColor" : "secondaryLight"
          } rounded-r-3xl py-2 px-4 w-[100px] text-darkSnow`}
        >
          Staking
        </button>
      </div>

      <div className="flex justify-between mt-10 w-full md:w-[80%]">
        <h4 className="text-grayColor font-semibold">Coin</h4>
        <h4 className="text-grayColor font-semibold">Duration</h4>
        <h4 className="text-grayColor font-semibold">Est.APR</h4>
        <h4 className="text-grayColor font-semibold hidden md:block">
          Mechanism
        </h4>
        <h4 className="text-grayColor font-semibold md:hidden">Sub</h4>
        <h4 className="text-grayColor font-semibold hidden md:block">
          Auto Subscribe
        </h4>
      </div>

      <div className="mt-5">
        {poolItems.map((pool, index) => (
          <div
            key={index}
            className={`flex justify-between w-full py-4 items-center ${
              maxLength == index
                ? null
                : `border-b border-${lightMode ? "darkSnow" : "grayColor"}`
            }`}
          >
            <Stakes
              icon={pool.icon}
              name={pool.name}
              pos={pool.pos}
              percentage={pool.percentage}
              id={index}
              pool={pool}
              isSub={pool.isSub}
            />

            <div className="w-[120px] md:w-[440px] flex justify-end md:justify-center items-center">
              <div
                className={`flex items-center justify-end ${
                  pool.isSub === true
                    ? `bg-${lightMode ? "darkSnow" : "secondaryLight"}`
                    : `bg-${lightMode ? "darkSnow" : "secondaryDark"} ${
                        lightMode
                          ? null
                          : "border-secondaryLight border border-2"
                      }`
                } rounded-3xl w-[40px] h-[25px] p-1 transition-all`}
              >
                <div
                  onClick={() => updatePoolSubcription(index)}
                  className={`rounded-full w-[20px] h-[20px] transform bg-primaryColor cursor-pointer ${
                    pool.isSub === true
                      ? "translate-x-0 transition-all"
                      : `translate-x-[-60%] transition-all ${
                          lightMode ? "bg-snow" : "bg-secondaryLight"
                        }`
                  }`}
                />
              </div>
            </div>

            <div className=" flex justify-end items-center">
              <button
                className={`hidden md:block w-[120px] bg-${
                  pool.isSub
                    ? `${lightMode ? "secondaryDark" : "primaryColor"}`
                    : `${lightMode ? "darkSnow" : "secondaryDark"}`
                } py-2 px-4 rounded-3xl text-darkSnow ${
                  !pool.isSub
                    ? `${
                        lightMode
                          ? "border border-2 border-grayColor text-grayColor"
                          : "border border-2 border-snow"
                      }`
                    : null
                }`}
              >
                {pool.isSub ? "Subscribed" : "Ended"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
