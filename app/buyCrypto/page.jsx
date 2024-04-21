"use client";

import { useState } from "react";
import Partner from "@/components/Partner";
import Layout from "@/components/Layout";
import { contextFunc } from "@/components/useStateContext/StateContext";
import { paymentPartner } from "@/constants";

export default function BuyCrypto() {
  const [isButtonActive, setIsButtonActive] = useState("buy");
  const [currency, setCurrency] = useState("usdt");

  const { lightMode } = contextFunc();

  return (
    <Layout>
      <div
        className={`bg-${
          lightMode ? "darkSnow" : "secondaryDark"
        } w-full buy-crypto`}
      >
        <div className="flex items-center mt-2">
          <button
            onClick={() => setIsButtonActive("buy")}
            className={`rounded-l-3xl ${
              isButtonActive === "buy"
                ? "bg-primaryColor"
                : lightMode
                ? "bg-grayColor"
                : "bg-secondaryLight"
            } ${
              isButtonActive === "buy"
                ? `text-${lightMode ? "snow" : "snow"}`
                : `text-${lightMode ? "snow" : "grayColor"}`
            } py-1 px-4 border-none outline-none`}
          >
            Buy
          </button>

          <button
            onClick={() => setIsButtonActive("sell")}
            className={`rounded-r-3xl 
              ${
                isButtonActive === "sell"
                  ? "bg-primaryColor"
                  : lightMode
                  ? "bg-grayColor"
                  : "bg-secondaryLight"
              }
              ${
                isButtonActive === "sell"
                  ? `text-${lightMode ? "snow" : "snow"}`
                  : `text-${lightMode ? "snow" : "grayColor"}`
              } py-1 px-4 border-none outline-none`}
          >
            Sell
          </button>
        </div>

        <section
          className={`mt-4 rounded-md p-2 md:p-4 ${
            lightMode ? "bg-snow" : "bg-secondarySemiDark"
          }`}
        >
          <button
            onClick={() => setCurrency("usdt")}
            className={`border-none outline-none py-1 px-4 rounded-l-3xl text-darkSnow ${
              currency === "usdt"
                ? "bg-primaryColor"
                : lightMode
                ? "bg-grayColor"
                : "bg-secondaryLight"
            }`}
          >
            {" "}
            USDT
          </button>
          <button
            onClick={() => setCurrency("usdc")}
            className={`border-none outline-none py-1 px-4 text-darkSnow ${
              currency === "usdc"
                ? "bg-primaryColor"
                : lightMode
                ? "bg-grayColor"
                : "bg-secondaryLight"
            }`}
          >
            USDC
          </button>
          <button
            onClick={() => setCurrency("btc")}
            className={`border-none outline-none py-1 px-4 text-darkSnow ${
              currency === "btc"
                ? "bg-primaryColor"
                : lightMode
                ? "bg-grayColor"
                : "bg-secondaryLight"
            }`}
          >
            BTC
          </button>
          <button
            onClick={() => setCurrency("eth")}
            className={`border-none outline-none py-1 px-4 text-darkSnow  rounded-r-3xl ${
              currency === "eth"
                ? "bg-primaryColor"
                : lightMode
                ? "bg-grayColor"
                : "bg-secondaryLight"
            }`}
          >
            ETH
          </button>

          <h2 className={`${lightMode ? "text-dark" : "text-darkSnow"} mt-4`}>
            Payment Partner
          </h2>

          <table className="mt-4 w-full">
            <thead className="w-full">
              <tr>
                <th>Payment Partner</th>
                <th>Reference Price(USD)</th>
                <th>Single Order Limit(USDT)</th>
                <th className="hidden md:table-cell">Payment Methods</th>
                <th className="hidden md:table-cell">Operation</th>
              </tr>
            </thead>

            <tbody>
              {paymentPartner.map((partner, i) => (
                <tr key={i} className={lightMode ? 'table-light' : 'table-dark'}>
                  <td>
                    <div className="flex items-center my-2">
                      <div className="w-8 h-8 my-2">
                        <div
                          dangerouslySetInnerHTML={{ __html: partner.currency }}
                        />
                      </div>
                      <span
                        className={`ml-2 hidden md:inline-block ${
                          lightMode ? "text-grayColor" : "text-darkSnow"
                        }`}
                      >
                        {partner.name}
                      </span>

                      <span
                        className={`ml-2 inline-block md:hidden ${
                          lightMode ? "text-grayColor" : "text-darkSnow"
                        }`}
                      >
                        {partner.short}
                      </span>
                    </div>
                  </td>

                  <td
                    className={`ml-4 ${
                      lightMode ? "text-grayColor" : "text-darkSnow"
                    }`}
                  >
                    <span>
                      $
                      {currency == "usdt"
                        ? partner.price.usdt
                        : currency == "usdc"
                        ? partner.price.usdc
                        : currency == "eth"
                        ? partner.price.eth
                        : currency == "btc"
                        ? partner.price.btc
                        : null}
                    </span>
                  </td>

                  <td
                    className={`ml-4 ${
                      lightMode ? "text-grayColor" : "text-darkSnow"
                    }`}
                  >
                    {partner.limit}
                  </td>

                  <td className="hidden md:table-cell">
                    <div className="flex items-center space-x-1">
                      <div
                        className={`w-16 h-8 flex items-center justify-center rounded bg-dark`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 600 204"
                          id="binance"
                        >
                          <path
                            fill="#f0b90b"
                            d="M63 101.74L51.43 113.3l-11.56-11.56 11.56-11.56zm28.05-28.07l19.81 19.82 11.56-11.56-31.37-31.37-31.37 31.37 11.56 11.56zm39.63 16.51l-11.56 11.56 11.56 11.56 11.55-11.56zm-39.63 39.63L71.24 110l-11.56 11.55 31.37 31.37 31.37-31.37L110.86 110zm0-16.51l11.56-11.56-11.56-11.56-11.56 11.56zm122 1.11v-.16c0-7.54-4-11.31-10.51-13.79 4-2.25 7.38-5.78 7.38-12.11v-.16c0-8.82-7.06-14.52-18.53-14.52h-26.04v56.14h26.7c12.67 0 21.02-5.13 21.02-15.4zm-15.4-24c0 4.17-3.45 5.94-8.9 5.94h-11.37V84.5h12.19c5.21 0 8.1 2.08 8.1 5.77zm3.13 22.46c0 4.17-3.29 6.09-8.75 6.09h-14.65v-12.33h14.27c6.34 0 9.15 2.33 9.15 6.1zM239 129.81V73.67h-12.39v56.14zm66.39 0V73.67h-12.23v34.57l-26.3-34.57h-11.39v56.14h12.19V94.12l27.18 35.69zm68.41 0l-24.1-56.54h-11.39l-24.05 56.54h12.59l5.15-12.59h23.74l5.13 12.59zm-22.45-23.5h-14.96l7.46-18.2zm81.32 23.5V73.67h-12.23v34.57l-26.31-34.57h-11.38v56.14h12.18V94.12l27.19 35.69zm63.75-9.06l-7.85-7.94c-4.41 4-8.34 6.57-14.76 6.57-9.62 0-16.28-8-16.28-17.64v-.16c0-9.62 6.82-17.48 16.28-17.48 5.61 0 10 2.4 14.36 6.33l7.83-9.06c-5.21-5.13-11.54-8.66-22.13-8.66-17.24 0-29.27 13.07-29.27 29v.16c0 16.12 12.27 28.87 28.79 28.87 10.81.03 17.22-3.82 22.99-9.99zm52.7 9.06v-11H518.6V107h26.47V96H518.6V84.66h30.08v-11h-42.35v56.14z"
                          ></path>
                          <path fill="none" d="M.26 0h600v204H.26z"></path>
                        </svg>
                      </div>

                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <path
                            fill="#3F51B5"
                            d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                          />
                          <path
                            fill="#FFC107"
                            d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"
                          />
                        </svg>
                      </div>

                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <path
                            fill="#1565C0"
                            d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                          />
                          <path
                            fill="#FFF"
                            d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                          />
                          <path
                            fill="#FFC107"
                            d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>

                  <td className="hidden md:table-cell">
                    <button
                      type="button"
                      className={`md:w-28 flex items-center justify-center space-x-3 rounded-3xl border-2 border-darkSnow active:scale-95 hover:bg-primaryColor py-2 px-4 ${
                        lightMode ? "text-secondaryLight" : "text-darkSnow"
                      } hover:text-darkSnow`}
                    >
                      <h4>{isButtonActive === "buy" ? "BUY" : "SELL"}</h4>

                      {isButtonActive === "buy" ? (
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill={lightMode ? "#000" : "#fff"}
                        >
                          <title>shopping-cart</title>
                          <path d="M20.756 5.345c-0.191-0.219-0.466-0.345-0.756-0.345h-13.819l-0.195-1.164c-0.080-0.482-0.497-0.836-0.986-0.836h-2.25c-0.553 0-1 0.447-1 1s0.447 1 1 1h1.403l1.86 11.164c0.008 0.045 0.031 0.082 0.045 0.124 0.016 0.053 0.029 0.103 0.054 0.151 0.032 0.066 0.075 0.122 0.12 0.179 0.031 0.039 0.059 0.078 0.095 0.112 0.058 0.054 0.125 0.092 0.193 0.13 0.038 0.021 0.071 0.049 0.112 0.065 0.116 0.047 0.238 0.075 0.367 0.075 0.001 0 11.001 0 11.001 0 0.553 0 1-0.447 1-1s-0.447-1-1-1h-10.153l-0.166-1h11.319c0.498 0 0.92-0.366 0.99-0.858l1-7c0.041-0.288-0.045-0.579-0.234-0.797zM18.847 7l-0.285 2h-3.562v-2h3.847zM14 7v2h-3v-2h3zM14 10v2h-3v-2h3zM10 7v2h-3c-0.053 0-0.101 0.015-0.148 0.030l-0.338-2.030h3.486zM7.014 10h2.986v2h-2.653l-0.333-2zM15 12v-2h3.418l-0.285 2h-3.133z"></path>
                          <path d="M10 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
                          <path d="M19 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 50 50"
                          fill={lightMode ? "#000" : "#fff"}
                        >
                          <path d="M 12 0 C 10.897 0 10 0.897 10 2 L 10 22 C 10 23.103 10.897 24 12 24 L 42 24 C 43.103 24 44 23.103 44 22 L 44 2 C 44 0.897 43.103 0 42 0 L 12 0 z M 22.5 5 L 31.5 5 C 32.328 5 33 5.672 33 6.5 C 33 7.328 32.328 8 31.5 8 L 22.5 8 C 21.672 8 21 7.328 21 6.5 C 21 5.672 21.672 5 22.5 5 z M 13.40625 27.90625 C 10.90625 27.90625 8.7 28.8 0.5 32.5 C -1.7763568e-15 32.7 -0.2 33.3125 0 33.8125 L 5.3125 45.59375 C 5.4125 45.89375 5.70625 46.0875 5.90625 46.1875 C 6.20625 46.2885 6.4875 46.19375 6.6875 46.09375 L 9.40625 44.3125 C 10.60625 43.5115 11.0875 43.3885 12.6875 44.1875 L 14.8125 45.3125 C 17.3125 46.6125 20.6875 48.40625 21.6875 48.90625 C 23.2875 49.70625 24.5875 50 25.6875 50 C 27.6875 50 28.9875 49.20625 30.1875 48.40625 C 31.3875 47.60625 46.0125 38.0875 47.3125 37.1875 C 48.9135 36.0875 49.90625 34.8125 49.90625 33.8125 C 50.00525 31.0105 47.30625 30.3125 44.90625 31.8125 L 34.1875 39 C 32.4875 40 31 39.90625 30 39.90625 L 24 39.90625 C 21.3 39.90625 18.00625 38.90625 17.90625 38.90625 C 17.60625 38.80625 17.49375 38.5125 17.59375 38.3125 C 17.69375 38.0125 17.8875 37.9 18.1875 38 L 18.3125 38 C 18.6125 38.101 21.9125 39 24.3125 39 L 30 39 C 30.8 39 31.4125 38.801 31.8125 38.5 C 32.2125 38.2 32.4875 37.9 32.6875 37.5 C 32.6875 37.4 32.8125 37.4115 32.8125 37.3125 L 32.8125 37.1875 C 32.9135 36.8875 32.90625 36.70625 32.90625 36.40625 C 32.90625 35.20625 31.90625 34.00625 29.90625 33.90625 C 28.30525 33.80625 26.1125 33.40625 24.3125 32.90625 C 23.3125 32.60625 22.5875 32.29375 22.1875 32.09375 C 21.8875 31.89375 21.5875 31.5875 21.1875 31.1875 C 19.9875 29.8875 18.20625 27.90625 13.40625 27.90625 z M 35.09375 28 C 33.99375 28 32.8125 28.39375 31.8125 29.09375 C 31.1125 29.49375 28.1125 31.401 26.3125 32.5 C 27.6135 32.8 29 33 30 33 C 30.7 33 31.40625 33.20625 31.90625 33.40625 L 38.40625 29 C 38.40625 29 36.89475 28 35.09375 28 z M 41.6875 29 C 40.6875 29 39.5125 29.4 37.8125 30.5 L 32.8125 33.90625 C 33.6125 34.60725 34 35.50625 34 36.40625 C 34 37.00625 33.80625 37.7125 33.40625 38.3125 L 33.5 38.1875 L 33.59375 38.09375 L 44.59375 30.8125 C 44.29375 29.5135 42.6875 29 41.6875 29 z" />
                        </svg>
                      )}
                    </button>
                  </td>

                  <td className="table-cell md:hidden">
                    {isButtonActive === "buy" ? (
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={lightMode ? "#000" : "#fff"}
                      >
                        <title>shopping-cart</title>
                        <path d="M20.756 5.345c-0.191-0.219-0.466-0.345-0.756-0.345h-13.819l-0.195-1.164c-0.080-0.482-0.497-0.836-0.986-0.836h-2.25c-0.553 0-1 0.447-1 1s0.447 1 1 1h1.403l1.86 11.164c0.008 0.045 0.031 0.082 0.045 0.124 0.016 0.053 0.029 0.103 0.054 0.151 0.032 0.066 0.075 0.122 0.12 0.179 0.031 0.039 0.059 0.078 0.095 0.112 0.058 0.054 0.125 0.092 0.193 0.13 0.038 0.021 0.071 0.049 0.112 0.065 0.116 0.047 0.238 0.075 0.367 0.075 0.001 0 11.001 0 11.001 0 0.553 0 1-0.447 1-1s-0.447-1-1-1h-10.153l-0.166-1h11.319c0.498 0 0.92-0.366 0.99-0.858l1-7c0.041-0.288-0.045-0.579-0.234-0.797zM18.847 7l-0.285 2h-3.562v-2h3.847zM14 7v2h-3v-2h3zM14 10v2h-3v-2h3zM10 7v2h-3c-0.053 0-0.101 0.015-0.148 0.030l-0.338-2.030h3.486zM7.014 10h2.986v2h-2.653l-0.333-2zM15 12v-2h3.418l-0.285 2h-3.133z"></path>
                        <path d="M10 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
                        <path d="M19 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                        fill={lightMode ? "#000" : "#fff"}
                      >
                        <path d="M 12 0 C 10.897 0 10 0.897 10 2 L 10 22 C 10 23.103 10.897 24 12 24 L 42 24 C 43.103 24 44 23.103 44 22 L 44 2 C 44 0.897 43.103 0 42 0 L 12 0 z M 22.5 5 L 31.5 5 C 32.328 5 33 5.672 33 6.5 C 33 7.328 32.328 8 31.5 8 L 22.5 8 C 21.672 8 21 7.328 21 6.5 C 21 5.672 21.672 5 22.5 5 z M 13.40625 27.90625 C 10.90625 27.90625 8.7 28.8 0.5 32.5 C -1.7763568e-15 32.7 -0.2 33.3125 0 33.8125 L 5.3125 45.59375 C 5.4125 45.89375 5.70625 46.0875 5.90625 46.1875 C 6.20625 46.2885 6.4875 46.19375 6.6875 46.09375 L 9.40625 44.3125 C 10.60625 43.5115 11.0875 43.3885 12.6875 44.1875 L 14.8125 45.3125 C 17.3125 46.6125 20.6875 48.40625 21.6875 48.90625 C 23.2875 49.70625 24.5875 50 25.6875 50 C 27.6875 50 28.9875 49.20625 30.1875 48.40625 C 31.3875 47.60625 46.0125 38.0875 47.3125 37.1875 C 48.9135 36.0875 49.90625 34.8125 49.90625 33.8125 C 50.00525 31.0105 47.30625 30.3125 44.90625 31.8125 L 34.1875 39 C 32.4875 40 31 39.90625 30 39.90625 L 24 39.90625 C 21.3 39.90625 18.00625 38.90625 17.90625 38.90625 C 17.60625 38.80625 17.49375 38.5125 17.59375 38.3125 C 17.69375 38.0125 17.8875 37.9 18.1875 38 L 18.3125 38 C 18.6125 38.101 21.9125 39 24.3125 39 L 30 39 C 30.8 39 31.4125 38.801 31.8125 38.5 C 32.2125 38.2 32.4875 37.9 32.6875 37.5 C 32.6875 37.4 32.8125 37.4115 32.8125 37.3125 L 32.8125 37.1875 C 32.9135 36.8875 32.90625 36.70625 32.90625 36.40625 C 32.90625 35.20625 31.90625 34.00625 29.90625 33.90625 C 28.30525 33.80625 26.1125 33.40625 24.3125 32.90625 C 23.3125 32.60625 22.5875 32.29375 22.1875 32.09375 C 21.8875 31.89375 21.5875 31.5875 21.1875 31.1875 C 19.9875 29.8875 18.20625 27.90625 13.40625 27.90625 z M 35.09375 28 C 33.99375 28 32.8125 28.39375 31.8125 29.09375 C 31.1125 29.49375 28.1125 31.401 26.3125 32.5 C 27.6135 32.8 29 33 30 33 C 30.7 33 31.40625 33.20625 31.90625 33.40625 L 38.40625 29 C 38.40625 29 36.89475 28 35.09375 28 z M 41.6875 29 C 40.6875 29 39.5125 29.4 37.8125 30.5 L 32.8125 33.90625 C 33.6125 34.60725 34 35.50625 34 36.40625 C 34 37.00625 33.80625 37.7125 33.40625 38.3125 L 33.5 38.1875 L 33.59375 38.09375 L 44.59375 30.8125 C 44.29375 29.5135 42.6875 29 41.6875 29 z" />
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* <div
          className={`bg-${
            lightMode ? "snow" : "secondarySemiDark"
          } rounded-md p-4 mt-5`}
        >
          <div className="flex items-center justify-center">
            <button
              onClick={() => setCurrency("usdt")}
              className={`border-none outline-none py-2 px-4 rounded-l-3xl bg-${
                currency == "usdt" ? "primaryColor" : "secondaryLight"
              } text-${currency == "usdt" ? "snow" : "grayColor"}`}
            >
              {" "}
              USDT
            </button>
            <button
              onClick={() => setCurrency("usdc")}
              className={`border-none outline-none py-2 px-4 bg-${
                currency == "usdc" ? "primaryColor" : "secondaryLight"
              } text-${currency == "usdc" ? "snow" : "grayColor"}`}
            >
              USDC
            </button>
            <button
              onClick={() => setCurrency("btc")}
              className={`border-none outline-none py-2 px-4 bg-${
                currency == "btc" ? "primaryColor" : "secondaryLight"
              } text-${currency == "btc" ? "snow" : "grayColor"}`}
            >
              BTC
            </button>
            <button
              onClick={() => setCurrency("eth")}
              className={`border-none outline-none py-2 px-4 rounded-r-3xl bg-${
                currency == "eth" ? "primaryColor" : "secondaryLight"
              } text-${currency == "eth" ? "snow" : "grayColor"}`}
            >
              ETH
            </button>
          </div>

          <Partner isButtonActive={isButtonActive} currency={currency} />
        </div> */}
      </div>
    </Layout>
  );
}
