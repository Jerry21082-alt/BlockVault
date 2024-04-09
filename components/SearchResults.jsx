import { contextFunc } from "./useStateContext/StateContext";

export default function SearchResults() {
  const { bestMatches, setStockSymbol, lightMode } = contextFunc();

  return (
    <div className={`${lightMode ? 'bg-dark' : 'bg-secondaryLight'} w-[300px] h-[300px] p-2 rounded-lg text-snow fixed top-[3.5rem] left-[4rem] z-[100] overflow-y-auto`}>
      {bestMatches.map((match, index) => (
        <div
          key={index}
          onClick={() => setStockSymbol(match.symbol)}
          className={`flex items-center justify-between hover:bg-primaryColor my-2 p-2 rounded-md z-[100]`}
        >
          <span className="text-snow text-sm">{match.symbol}</span>
          <span className="text-snow text-sm">
            {match.description.length > 15
              ? `${match.description.slice(0, 15)}...`
              : match.description}
          </span>
        </div>
      ))}
    </div>
  );
}
