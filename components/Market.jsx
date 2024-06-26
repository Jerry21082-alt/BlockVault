import { cryptoArray } from "@/constants";
import Image from "next/image";
import { contextFunc } from "./useStateContext/StateContext";
import { formatPrice } from "@/helpers/formatPrice";

export default function Market() {
  const max_length = cryptoArray.length - 1;
  const lastItem = cryptoArray[max_length];

  const { lightMode } = contextFunc();

  return (
    <div
      className={`market dashboard-items mt-5 bg-${
        lightMode ? "snow" : "secondarySemiDark"
      } rounded-lg`}
    >
      <div
        className={`border-b ${
          lightMode ? "border-darkSnow" : "border-secondaryLight"
        }`}
      >
        <h2
          className={`text-${
            lightMode ? "dark" : "snow"
          } font-bold p-4 text-xl`}
        >
          Market
        </h2>
      </div>

      <table className="w-full mt-4">
        <thead>
          <tr>
            <th>Market</th>
            <th>Price</th>
            <th className="">1h %</th>
            <th>24h %</th>
            <th className="">7d %</th>
            <th className="hidden md:table-cell">Market Cap</th>
            <th className="hidden md:table-cell">Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoArray.map((data, i) => (
            <tr
              key={i}
              className={lightMode ? "table-light" : "table-dark"}
              style={{ border: lastItem === data ? "none" : null }}
            >
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center my-1">
                    <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                  </div>

                  <span
                    className={`hidden md:table-cell ${
                      lightMode ? "text-grayColor" : "text-darkSnow"
                    }`}
                  >
                    {data.name}
                  </span>
                  <span
                    className={`table-cell md:hidden ${
                      lightMode ? "text-grayColor" : "text-darkSnow"
                    }`}
                  >
                    {data.short}
                  </span>
                </div>
              </td>
              <td>
                <span
                  className={
                    data.price < 50
                      ? `text-dangerColor`
                      : lightMode
                      ? "text-greenColor"
                      : "text-brightGreen"
                  }
                >
                  ${data.price}
                </span>
              </td>
              <td>
                <span className={`text-dangerColor`}>0.78%</span>
              </td>
              <td>
                <span
                  className={`${
                    data.percentChange24h < 1
                      ? `text-dangerColor`
                      : lightMode
                      ? "text-greenColor"
                      : "text-brightGreen"
                  }`}
                >
                  {data.percentChange24h}%
                </span>
              </td>
              <td>
                <span className={`text-dangerColor`}>14.6%</span>
              </td>
              <td>
                <span
                  className={`hidden md:block ${
                    lightMode ? "text-grayColor" : "text-darkSnow"
                  }`}
                >
                  ${formatPrice(data.marketCap, 0)}
                </span>
              </td>
              <td>
                <span
                  className={`hidden md:block ${
                    lightMode ? "text-grayColor" : "text-darkSnow"
                  }`}
                >
                  ${formatPrice(data.volume24h, 0)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
