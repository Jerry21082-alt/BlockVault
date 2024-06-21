"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { onBoardingContent } from "@/constants";
import {
  BsChevronLeft,
  BsChevronRight,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function OnBoarding() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [offBoard, setOffBoard] = useState(false);

  const handleNextButton = (index) => {
    setCount(index);
  };
  const handlePrevButton = (index) => {
    setCount(index);
  };

  return (
    <div
      className={`w-screen h-full flex flex-col md:flex-row justify-center items-center z-[20] ${
        offBoard ? "hidden" : null
      }`}
    >
      <div className="p-4 h-screen w-screen md:w-[50vw] bg-secondarySemiDark">
        <div className="w-28 bg-secondaryDark py-1 px-4 outline-none border-none flex items-center justify-center space-x-1 text-sm md:text-md rounded-3xl">
          <span className="text-snow">Step {count + 1}</span>
          <span className="text-grayColor">of {onBoardingContent.length}</span>
        </div>

        <div className="mt-[5rem] ml-5">
          <h2 className="text-snow text-[18px] font-[500]">
            {onBoardingContent[count].title}
          </h2>
          <div className="mt-10">
            {onBoardingContent[count].lists.map((list, index) => (
              <ul key={index} className="text-grayColor list-disc">
                <li className="py-2">{list}</li>
              </ul>
            ))}
          </div>

          <div className="absolute bottom-[1rem] left-0 flex justify-between items-center w-screen px-5">
            <button
              onClick={() => handlePrevButton(count > 0 ? count - 1 : 0)}
              className={`${
                count > 0 ? "bg-primaryColor" : null
              } border-snow border-2 border-solid rounded-3xl py-1 px-4 outline-none ${
                count > 0 ? "text-darkSnow" : "text-grayColor"
              } flex justify-center items-center space-x-2 w-24 active:scale-95 active:bg-primaryColor`}
            >
              <div className="w-3 h-3">
                <svg
                  className="w-full h-full"
                  fill="#e9eedf"
                  viewBox="0 0 46.001 85.999"
                >
                  <path d="M44.998,80.094c1.338,1.352,1.338,3.541,0,4.893c-1.336,1.35-3.506,1.352-4.844,0L1.003,45.447  c-1.338-1.352-1.338-3.543,0-4.895l39.15-39.539c1.338-1.352,3.506-1.352,4.844,0S46.335,4.555,45,5.906L9.294,43L44.998,80.094z" />
                </svg>
              </div>
              <span>Back</span>
            </button>

            {count < onBoardingContent.length - 1 ? (
              <div className="flex justify-center items-center space-x-2">
                {count < onBoardingContent.length - 1 && (
                  <button
                    onClick={() => router.push("/market")}
                    className="border-primaryColor border-2 rounded-3xl py-1 px-4 outline-none text-primaryColor w-24"
                  >
                    Skip
                  </button>
                )}

                <button
                  onClick={() =>
                    handleNextButton(
                      count < onBoardingContent.length - 1
                        ? count + 1
                        : onBoardingContent.length - 1
                    )
                  }
                  className="bg-primaryColor rounded-3xl py-1 px-4 outline-none flex justify-center items-center space-x-2 w-24 text-darkSnow"
                >
                  <span>Next</span>

                  <div className="w-3 h-3">
                    <svg
                      className="w-full h-full"
                      height="85.999px"
                      viewBox="0 0 46.001 85.999"
                      width="46.001px"
                      fill="#e9eedf"
                    >
                      <path d="M1.003,80.094c-1.338,1.352-1.338,3.541,0,4.893c1.337,1.35,3.506,1.352,4.845,0l39.149-39.539  c1.338-1.352,1.338-3.543,0-4.895L5.848,1.014c-1.339-1.352-3.506-1.352-4.845,0c-1.338,1.352-1.338,3.541-0.001,4.893L36.706,43  L1.003,80.094z" />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <Link
                href={`/market`}
                className="bg-primaryColor rounded-3xl py-1 px-4 outline-none flex justify-center items-center space-x-1 w-32 text-snow"
              >
                <span>Continue</span>

                <div className="w-4 h-4">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M8,0 C12.4183,0 16,3.58172 16,8 C16,12.4183 12.4183,16 8,16 C3.58172,16 0,12.4183 0,8 C0,3.58172 3.58172,0 8,0 Z M8,2 C4.68629,2 2,4.68629 2,8 C2,11.3137 4.68629,14 8,14 C11.3137,14 14,11.3137 14,8 C14,4.68629 11.3137,2 8,2 Z M7,8.58579 L10.2929,5.29289 C10.6834,4.90237 11.3166,4.90237 11.7071,5.29289 C12.0675615,5.65337923 12.0952893,6.22060645 11.7902834,6.61290152 L11.7071,6.70711 L7.70711,10.7071 C7.34662077,11.0675615 6.77939355,11.0952893 6.38709848,10.7902834 L6.29289,10.7071 L4.29289,8.70711 C3.90237,8.31658 3.90237,7.68342 4.29289,7.29289 C4.65337923,6.93241 5.22060645,6.90468077 5.61290152,7.20970231 L5.70711,7.29289 L7,8.58579 L10.2929,5.29289 L7,8.58579 Z"
                    />
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="w-[80vw] h-screen bg-secondaryDark justify-center items-center hidden md:flex">
        <div className="w-full flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src={`${onBoardingContent[count].introPhoto}`}
            alt="intro photo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
