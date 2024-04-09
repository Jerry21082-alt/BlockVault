import Chart from "./Chart";

export default function Overview({ symbol, price, change, changePercent, currency }) {
  return (
    <Chart>
      <span className="absolute left-4 top-4 text-darkSnow text-lg">{symbol}</span>

      <div className="flex items-center justify-around items around w-full h-full">
        <span className="text-2xl xl:text-4xl flex items-center">${price}</span>
        <span className="text-lg xl:text-xl text-darkSnow m-2">{currency}</span>
        <span className={`text-lg xl:text-xl ${change > 0 ? 'text-greenColor' : 'text-dangerColor'}`}>{change} ({changePercent}%)</span>
      </div>
    </Chart>
  )
}
