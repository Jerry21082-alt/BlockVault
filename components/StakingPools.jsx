import { stakingPool } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function StakingPools() {
  const { lightMode } = contextFunc();

  const [filterBtn, setFilterBtn] = useState("All");

  const [poolItems, setPoolsItems] = useState([...stakingPool]);

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

  return (
    <div
      className={`bg-${
        lightMode ? "snow" : "secondarySemiDark"
      } p-2 md:p-4 rounded-md h-full`}
    >
      <div className="flex items-center">
        <button
          onClick={() => filterAll(allElement, (elements) => elements)}
          className={`outline-none border-none bg-${
            filterBtn == "All" ? "primaryColor" : "secondaryLight"
          } rounded-l-3xl py-1 px-4 text-darkSnow w-[100px]`}
        >
          All
        </button>

        <button
          onClick={() =>
            filterSub(poolItems, (element) => element.isSub === true)
          }
          className={`outline-none border-none bg-${
            filterBtn == "Staking" ? "primaryColor" : "secondaryLight"
          } rounded-r-3xl py-1 px-4 w-[100px] text-darkSnow`}
        >
          Staking
        </button>
      </div>

      <table className="w-full mt-6">
        <thead>
          <tr>
            <th>
              <span>Coin</span>
            </th>
            <th className="hidden md:table-cell">
              <span>Duration</span>
            </th>
            <th>
              <span>Est.APR</span>
            </th>
            <th className="hidden md:table-cell">
              <span>Mechanism</span>
            </th>
            <th>
              <span>Auto Subscribe</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {poolItems.map((pool, i) => (
            <tr
              key={i}
              className={`${
                stakingPool[stakingPool.length - 1] === pool
                  ? "border-b-0"
                  : "border-b"
              } ${lightMode ? "border-darkSnow" : "border-secondaryLight"}`}
            >
              <td>
                <div className="flex items-center space-x-2 my-4">
                  <div className="w-8 h-8">
                    <div dangerouslySetInnerHTML={{ __html: pool.icon }} />
                  </div>
                  <span
                    className={lightMode ? "text-grayColor" : "text-darkSnow"}
                  >
                    {pool.name}
                  </span>
                </div>
              </td>

              <td className="hidden md:table-cell">
                <span
                  className={lightMode ? "text-grayColor" : "text-darkSnow"}
                >
                  {pool.pos}
                </span>
              </td>

              <td>
                <span
                  className={lightMode ? "text-grayColor" : "text-darkSnow"}
                >
                  {pool.percentage}
                </span>
              </td>

              <td className="hidden md:table-cell">
                <span
                  className={lightMode ? "text-grayColor" : "text-darkSnow"}
                >
                  {pool.machanism}
                </span>
              </td>

              <td>
                <div className="flex items-center justify-between w-full">
                  <button
                    type="button"
                    className={`flex items-center justify-end rounded-3xl w-[40px] h-[25px] p-1 ${
                      pool.isSub === true
                        ? lightMode
                          ? "bg-darkSnow"
                          : "bg-secondaryLight"
                        : lightMode
                        ? "bg-darkSnow"
                        : "bg-secondaryDark"
                    }`}
                    // style={{backgroundColor: lightMode ? '#F5F5F5' : '#1f183e'}}
                  >
                    <div
                      onClick={() => updatePoolSubcription(i)}
                      className={`rounded-full w-[20px] h-[20px] cursor-pointer ${
                        pool.isSub === true
                          ? lightMode
                            ? "bg-primaryColor"
                            : "bg-primaryColor"
                          : lightMode
                          ? "bg-snow"
                          : "bg-secondaryLight"
                      } ${pool.isSub ? "untoggle-sub" : "toggle-sub"}`}
                    />
                  </button>

                  <div
                    className={`w-28 flex justify-center outline-none rounded-3xl py-2 px-4 ${
                      pool.isSub === true
                        ? lightMode
                          ? "bg-primaryColor text-snow border-0"
                          : "bg-primaryColor text-darkSnow border-0"
                        : lightMode
                        ? "bg-snow border-2 border-darkSnow text-grayColor"
                        : "bg-secondaryLight border border-darkSnow text-darkSnow"
                    }`}
                  >
                    <span
                      // className={lightMode ? "text-grayColor" : "text-darkSnow"}
                    >
                      {pool.isSub === true ? "Subscribed" : "Ended"}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
