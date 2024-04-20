import { useState, useEffect } from "react";
import { contextFunc } from "./useStateContext/StateContext";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { generateStockCandles } from "@/helpers/generateStockCandles";

export default function DisplayChart({ stockDetails }) {
  const stockData = generateStockCandles(90);
  const data_1 = stockData.slice(0, 20);
  const data_2 = stockData.slice(0, 40);
  const data_3 = stockData.slice(0, 60);
  const data_4 = stockData.slice(0, 90);

  const filterButtonsValue = [
    {
      range: 30,
      label: "1D",
    },
    {
      range: 60,
      label: "7D",
    },
    {
      range: 90,
      label: "1MT",
    },
    {
      range: 120,
      label: "1Y",
    },
  ];

  const { lightMode } = contextFunc();
  const [data, setData] = useState(stockData);
  const [filter, setFilter] = useState("1Y");
  const firstBtn = filterButtonsValue[0].label;
  let lastIndex = filterButtonsValue.length - 1;
  const lastBtn = filterButtonsValue[lastIndex].label;

  const convertDataTimeToYear = (timesStamp) => {
    const timestamp = timesStamp;
    const date = new Date(timestamp / 1000);

    return date.getMinutes;
  };

  const formatData = () => {
    return data.map((item) => {
      return {
        value: item.h[0].toFixed(2),
        date: convertDataTimeToYear(item.l[0]),
      };
    });
  };

  const updateChartData = (newData) => {
    setData(newData);
  };

  const handleButtonClicked = (newData, date) => {
    updateChartData(newData);
    setFilter(date);
  };

  return (
    <div
      className={`chart w-full md:w-[70%] relative bg-${
        lightMode ? "snow" : "secondarySemiDark"
      } rounded-lg`}
    >
      <div
        className={`flex flex-col md:flex-row space-y-4 md:gap-0 justify-between items-center p-4 border-b border-${
          lightMode ? "darkSnow" : "secondaryLight"
        } py-2`}
      >
        <h2
          className={`font-bold text-${
            lightMode ? "dark" : "snow"
          } text-center`}
        >
          {stockDetails.name}
        </h2>
        <div className="flex items-center">
          <button
            onClick={() => handleButtonClicked(data_1, "1D")}
            className={`py-2 px-4 outline-none border-none text-snow text-sm  bg-grayColor ${
              lightMode
                ? filter === "1D"
                  ? "bg-primaryColor"
                  : "bg-grayColor"
                : filter === "1D"
                ? "bg-primaryColor"
                : "bg-secondaryLight"
            } ${
              firstBtn === "1D"
                ? "rounded-l-3xl"
                : lastBtn === "1D"
                ? "rounded-r-3xl"
                : null
            }`}
          >
            1D
          </button>

          <button
            onClick={() => handleButtonClicked(data_2, "7D")}
            className={`py-2 px-4 outline-none border-none text-snow text-sm  bg-grayColor ${
              lightMode
                ? filter === "7D"
                  ? "bg-primaryColor"
                  : "bg-grayColor"
                : filter === "7D"
                ? "bg-primaryColor"
                : "bg-secondaryLight"
            } ${
              firstBtn === "7D"
                ? "rounded-l-3xl"
                : lastBtn === "7D"
                ? "rounded-r-3xl"
                : null
            }`}
          >
            7D
          </button>

          <button
            onClick={() => handleButtonClicked(data_3, "1MT")}
            className={`py-2 px-4 outline-none border-none text-snow text-sm  bg-grayColor ${
              lightMode
                ? filter === "1MT"
                  ? "bg-primaryColor"
                  : "bg-grayColor"
                : filter === "1MT"
                ? "bg-primaryColor"
                : "bg-secondaryLight"
            } ${
              firstBtn === "1MT"
                ? "rounded-l-3xl"
                : lastBtn === "1MT"
                ? "rounded-r-3xl"
                : null
            }`}
          >
            1MT
          </button>

          <button
            onClick={() => handleButtonClicked(data_4, "1Y")}
            className={`py-2 px-4 outline-none border-none text-snow text-sm  bg-grayColor ${
              lightMode
                ? filter === "1Y"
                  ? "bg-primaryColor"
                  : "bg-grayColor"
                : filter === "1Y"
                ? "bg-primaryColor"
                : "bg-secondaryLight"
            } ${
              firstBtn === "1Y"
                ? "rounded-l-3xl"
                : lastBtn === "1Y"
                ? "rounded-r-3xl"
                : null
            }`}
          >
            1Y
          </button>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0 md:absolute bottom-0 right-0 left-0">
        <ResponsiveContainer height={300}>
          <AreaChart data={formatData()}>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(199 210 254 )"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="rgb(199 210 254)" stopOpacity={0} />
            </linearGradient>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#7250ee"
              fillOpacity={1}
              strokeWidth={0.3}
              fill={lightMode ? "#73d7e1" : "#7250ee"}
              className="chart-area"
            />
            {/* <Tooltip /> */}
            <XAxis hide={true} dataKey={"date"} />
            <YAxis hide={true} domain={["dataMin", "dataMax"]} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
