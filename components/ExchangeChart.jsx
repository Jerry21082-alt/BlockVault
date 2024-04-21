"use client";

import dynamic from "next/dynamic";
import { data } from "../constants/apexChart";
// import Chart from 'react-apexcharts'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ExchangeChart() {
  return (
    <div className="mt-5 md:mt-20">
      <Chart
        type="candlestick"
        height='400'
        width="100%"
        options={data.options}
        series={data.series}
      />
    </div>
  );
}
