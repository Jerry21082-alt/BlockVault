import { market } from "@/constants";
import Image from "next/image";
import { contextFunc } from "./useStateContext/StateContext";

export default function Market() {
  const max_length = market.length - 1;
  const lastItem = market[max_length];

  const { lightMode } = contextFunc();

  const MarketInfo = ({ icon, name, price, hour, day, week, cap, vol, borderStyle, dep }) => (
    <div className={`flex justify-between items-center  py-3 ${borderStyle}`}>
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-[25px]">
          <Image src={icon} alt="currency photo" />
        </div>
        <span className={`text-${lightMode ? 'dark' : 'snow'}`}>{name}</span>
      </div>

      <span className={`text-${dep ? 'dangerColor' : 'greenColor'} text-sm`}>${price}k</span>

      <span className="hidden md:block text-greenColor text-sm">{hour}%</span>

      <span className="hidden md:block text-greenColor text-sm">{day}%</span>

    <span className="hidden md:block text-greenColor text-sm">{week}%</span>

      <span className={`text-${lightMode ? 'dark' : 'snow'} text-sm`}>${cap}k</span>

      <span className={`text-${lightMode ? 'dark' : 'snow'} text-sm`}>${vol}k</span>
    </div>
  );

  return (
    <div className={`mt-5 bg-${lightMode ? 'snow' : 'secondarySemiDark'} rounded-lg`}>
      <div className={`border-b ${lightMode ? 'border-darkSnow' : 'border-secondaryLight'}`}>
        <h2 className={`text-${lightMode ? 'dark' : 'snow'} font-bold p-4 text-xl`}>Market</h2>
      </div>
      <div className="flex justify-between p-4 items-center mt-5">
        <span className="text-grayColor font-bold">Market</span>
        <span className="text-grayColor font-bold">Price</span>

        <span className="hidden md:block text-grayColor font-bold">1h%</span>
        <span className="hidden md:block text-grayColor font-bold">24h%</span>
        <span className="hidden md:block text-grayColor font-bold">7d%</span>

        <span className="text-grayColor font-bold">Cap</span>
        <span className="text-grayColor font-bold">Vol</span>
      </div>

      <div className="mt-2 w-full p-3">
        {market.map((market, idx) => (
          <MarketInfo
            key={idx}
            icon={market.icon}
            name={market.name.short}
            price={market.price}
            hour={market.time.hr}
            day={market.time.day}
            week={market.time.week}
            cap={market.cap}
            vol={market.vol}
            borderStyle={lastItem === market ? "" : `border-b border-${lightMode ? 'darkSnow' : 'secondaryLight'}`}
            dep={market.depreciation}
          />
        ))}
      </div>
    </div>
  );
}
