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
        <span className={`text-${lightMode ? "dark" : "snow"} hidden md:block`}>
          {name}
        </span>
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
            <th>
              <span>Duration</span>
            </th>
            <th>
              <span>Est.APR</span>
            </th>
            <th>
              <span>Mechanism</span>
            </th>
            <th>
              <span>Auto Subscribe</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {stakingPool.map((pool, i) => (
            <tr
              key={i}
              className={`${
                stakingPool[stakingPool.length - 1] === pool
                  ? "border-b-0"
                  : "border-b"
              } ${lightMode ? "border-darkSnow" : "border-secondaryLight"}`}
            >
              <td>
                <div className="flex items-center space-x-4 my-4">
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

              <td>
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

              <td>
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
                    className={`flex items-center justify-end bg-${
                      lightMode ? "darkSnow" : "secondaryLight"
                    } rounded-3xl w-[40px] h-[25px] p-1`}
                  >
                    <div
                      // onClick={() => setLightMode((prev) => !prev)}
                      className={`rounded-full w-[20px] h-[20px] transform bg-primaryColor cursor-pointer ${
                        lightMode ? "set-light-mode" : "set-dark-mode"
                      }`}
                    />
                  </button>

                  <button className={`max-w-32 border-2 ${lightMode ? 'border border-grayColor' : 'border border-darkSnow'} outline-none rounded-3xl py-1 px-4 text-primaryColor`}>
                    <span
                      className={lightMode ? "text-grayColor" : "text-darkSnow"}
                    >Subscribe</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="flex justify-between mt-10 w-full md:w-[80%]">
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
      </div> */}

      {/* <div className="mt-5">
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
                          : "border-secondaryLight border-2"
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
                          ? "border-2 border-grayColor text-grayColor"
                          : "border-2 border-snow"
                      }`
                    : null
                }`}
              >
                {pool.isSub ? "Subscribed" : "Ended"}
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
