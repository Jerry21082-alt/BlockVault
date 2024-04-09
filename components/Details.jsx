import Chart from "./Chart";

export default function Details({ details }) {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "MarketCapitalization",
    finnhubIndustry: "Industry",
  };

  const convetMillionToBillion = (num) => {
    return (num / 1000).toFixed(2);
  };
  return (
    <Chart>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((list) => (
          <li key={list} className="flex-1 flex justify-between items-center">
            <span>{detailsList[list]}</span>
            <span>
              {list === "marketCapitalization"
                ? `${convetMillionToBillion(details[list])}`
                : details[list]}
            </span>
          </li>
        ))}
      </ul>
    </Chart>
  );
}
