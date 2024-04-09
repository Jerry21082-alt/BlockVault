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
        offBoard ? "hidden" : ""
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
              className={` bg-${
                count > 0 ? "primaryColor" : null
              } border-snow border-2 border-solid rounded-2xl py-1 px-4 outline-none text-${
                count > 0 ? "snow" : "grayColor"
              } flex justify-center items-center gap-1 w-[100px]`}
            >
              <BsChevronLeft color="#fff" />
              <span>Back</span>
            </button>

            {count < onBoardingContent.length - 1 ? (
              <div className="flex justify-center items-center gap-2">
                {count < onBoardingContent.length - 1 && (
                  <button
                    onClick={() => router.push("/home")}
                    className="border-primaryColor border-2 border-solid rounded-2xl py-1 px-4 outline-none text-grayColor text-primaryColor w-[90px]"
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
                  className="bg-primaryColor rounded-2xl py-1 px-4 outline-none text-grayColor flex justify-center items-center gap-1 w-[90px] text-snow"
                >
                  <span>Next</span>

                  <BsChevronRight color="#fff" />
                </button>
              </div>
            ) : (
              <Link href={`/home`} 
                className="bg-primaryColor rounded-2xl py-1 px-4 outline-none text-grayColor flex justify-center items-center gap-1 w-[130px] text-snow"
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
