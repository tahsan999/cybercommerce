import { useState } from "react";
import { GoDash } from "react-icons/go";


export default function PriceRange() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);

  return (
    <div className="mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm leading-6 font-popins font-normal text-[#A7A7A7] pb-2">
            From
          </label>
          <input
            type="number"
            className="w-[106px] px-2 py-2 border border-[#9F9F9F] rounded-[3px] text-sm leading-6 font-popins font-normal text-[#000000]"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <GoDash className="text-[#A7A7A7] mt-7" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-end leading-6 font-popins font-normal text-[#A7A7A7] pb-2">
            To
          </label>
          <input
            type="number"
            className="w-[106px] px-2 py-2 border border-[#9F9F9F] rounded-[3px] text-sm leading-6 font-popins font-normal text-[#000000]"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="relative h-10">
        <input
          type="range"
          min="0"
          max="500000"
          step="10"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(Number(e.target.value), maxPrice))
          }
          className="absolute w-full h-1 appearance-none range-slider"
        />

        <input
          type="range"
          min="0"
          max="500000"
          step="10"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(Number(e.target.value), minPrice))
          }
          className="absolute w-full h-1 appearance-none range-slider"
        />

        {/* Track */}
        <div className="absolute inset-x-0 h-1 bg-[#CECECE] rounded"></div>

        {/* Filled Range Highlight */}
        <div
          className="absolute h-1 bg-black rounded"
          style={{
            left: `${(minPrice / 500000) * 100}%`,
            right: `${100 - (maxPrice / 500000) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
