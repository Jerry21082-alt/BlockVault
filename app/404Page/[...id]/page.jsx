"use client";

import Layout from "@/components/Layout";
import { contextFunc } from "../../../components/useStateContext/StateContext";

export default function ErrorPage() {
  const { lightMode } = contextFunc();
  return (
    <Layout>
      <div
        className="w-full h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: lightMode ? "#e9eedf" : "#251c4c" }}
      >
        <h1
          className="text-center"
          style={{ color: lightMode ? "#8b86a1" : "#e9eedf" }}
        >
          404!
        </h1>

        <svg
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 17.25L15.75 17.25L15.75 15L19.5 15L19.5 17.25ZM19.5 13.5L19.5 9.75L15.75 9.75L15.75 6L10.5 6L9 6L4.5 6L4.5 9.75L3 9.75L3 15L4.5 15L4.5 18.75L9 18.75L10.5 18.75L14.25 18.75L15.75 18.75L21 18.75L21 13.5L19.5 13.5ZM18 13.5L18 11.25L15.75 11.25L14.25 11.25L14.25 13.5L15.75 13.5L18 13.5ZM14.25 15L12.75 15L10.5 15L10.5 17.25L14.25 17.25L14.25 15ZM12.75 11.25L12.75 13.5L9 13.5L9 11.25L10.5 11.25L12.75 11.25ZM9 15L9 17.25L6 17.25L6 15L9 15ZM14.25 7.5L10.5 7.5L10.5 9.75L14.25 9.75L14.25 7.5ZM4.5 11.25L4.5 13.5L7.5 13.5L7.5 11.25L4.5 11.25ZM6 9.75L9 9.75L9 7.5L6 7.5L6 9.75Z"
            fill="#fff"
          />
        </svg>

        <p style={{ color: lightMode ? "#8b86a1" : "#e9eedf" }}>
          This page is under construction!
        </p>
      </div>
    </Layout>
  );
}
