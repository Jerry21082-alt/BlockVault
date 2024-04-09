import {
  convertDateToUnixTimesStamp,
  convertUnixTimesStampToDate,
  createDate,
} from "@/helpers/dateHelper";
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
import { chartConfig } from "@/constants/config";

export default function DisplayChart({ stockDetails }) {
  const { stockSymbol, lightMode } = contextFunc();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1D");
  const firstBtn = Object.keys(chartConfig)[0];
  let lastIndex = Object.keys(chartConfig).length - 1;
  const lastBtn = Object.keys(chartConfig)[lastIndex];

  const FilterBtns = ({ onClick, active, text, radiusStyle }) => (
    <button
      onClick={onClick}
      className={`py-2 px-4 outline-none border-none text-snow  text-sm ${
        !active && lightMode
          ? "bg-grayColor"
          : active && lightMode
          ? "bg-primaryColor"
          : active && !lightMode
          ? "bg-primaryColor"
          : !active && !lightMode
          ? "bg-secondaryLight"
          : null
      } ${radiusStyle}`}
    >
      {text}
    </button>
  );

  const formatData = (data) => {
    return data.map((item, idx) => {
      return {
        value: item.c.toFixed(2),
        date: convertUnixTimesStampToDate(item.t[idx]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimesStampUnix = convertDateToUnixTimesStamp(startDate);
      const endDatesTimesStampUnix = convertDateToUnixTimesStamp(endDate);

      return { startTimesStampUnix, endDatesTimesStampUnix };
    };

    const updateChartData = async () => {
      const { startTimesStampUnix, endDatesTimesStampUnix } = getDateRange();
      try {
        const response = await ''(
          stockSymbol,
          1,
          startTimesStampUnix,
          endDatesTimesStampUnix,
          60
        );
        const results = response.results;
        console.log(results)
        setData(results);
      } catch (err) {
        setData([]);
        console.log(err);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <div
      className={`w-full md:w-[70%] h-full bg-${
        lightMode ? "snow" : "secondarySemiDark"
      } rounded-lg p-4`}
    >
      <div
        className={`flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border-b border-${
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
          {Object.keys(chartConfig).map((li) => (
            <FilterBtns
              key={li}
              text={li}
              active={li === filter}
              radiusStyle={
                firstBtn === li
                  ? "rounded-l-3xl"
                  : lastBtn === li
                  ? "rounded-r-3xl"
                  : ""
              }
              onClick={() => setFilter(li)}
            />
          ))}
        </div>
      </div>
      <div className="h-[300px] mt-[8rem] ">
        <ResponsiveContainer>
          <AreaChart data={formatData(data)}>
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
              strokeWidth={0.5}
              fill={lightMode ? "rgb(199 210 254)" : "#1f183e"}
            />
            <Tooltip />
            <XAxis dataKey={"date"} />
            <YAxis domain={["dataMin", "dataMax"]} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
