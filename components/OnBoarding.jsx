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
      className={`w-screen h-screen fixed top-0 flex flex-col md:flex-row justify-center items-center z-[20] ${
        offBoard ? "hidden" : null
      }`}
    >
      <div className="p-4 h-screen w-screen md:w-[50vw] bg-secondarySemiDark">
        <button className="bg-secondaryDark py-1 px-4 outline-none border-none flex gap-1 text-sm md:text-md rounded-2xl">
          <span className="text-snow">Step {count + 1}</span>
          <span className="text-grayColor">of {onBoardingContent.length}</span>
        </button>

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

          <div className="absolute bottom-[2rem] left-0 flex justify-between items-center w-screen px-5">
            <button
              onClick={() => handlePrevButton(count > 0 ? count - 1 : 0)}
              className={`${
                count < 0 ? "bg-primaryColor" : null
              } border-snow border-2 border-solid rounded-3xl py-1 px-4 outline-none ${
                count < 0 ? "text-darkSnow" : "text-grayColor"
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
              <div className="flex justify-center items-center gap-2">
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
                className="bg-primaryColor rounded-2xl py-1 px-4 outline-none flex justify-center items-center gap-1 w-[130px] text-snow"
              >
                <span>Continue</span>

                <BsFillCheckCircleFill color="#fff" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
