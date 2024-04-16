import Chart from "react-apexcharts";
import { data } from "../constants/apexChart";

export default function ExchangeChart() {
  return (
    <div className="mt-10">
      <Chart
        type="candlestick"
        height={400}
        options={data.options}
        series={data.series}
      />
    </div>
  );
}
