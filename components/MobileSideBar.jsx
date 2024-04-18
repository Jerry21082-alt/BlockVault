"use client";

import Link from "next/link";
import { contextFunc } from "./useStateContext/StateContext";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const sideBarLinks = [
  {
    href: "/",
    link: "Market",
    icon: `<svg baseProfile="tiny" height="34px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="34px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/></svg>`,
  },
  {
    href: "/buyCrypto",
    link: "Buy Crypto",
    icon: `<svg class="feather feather-shopping-cart" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  },
  {
    href: "/swap",
    link: "Swap",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 173.397 216.74624999999997" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs><style type="text/css">
   
  
   
  </style></defs><g><g><path class="fil0" d="M54.7609 13.3912l11.3554 19.6707c0.4619,0.7974 0.2006,1.8206 -0.5896,2.2968 -11.0452,6.6887 -24.7332,17.713 -27.2133,32.2298 -1.3722,8.0432 0.9279,16.3477 6.8439,24.7332 1.1819,-6.0043 5.048,-12.7811 11.0665,-19.2405 6.8905,-7.3908 15.5753,-13.2538 22.6766,-15.3035 0.7493,-0.2188 1.5452,0.1059 1.9334,0.7797l11.3603 19.6707 15.5862 -52.2216 -53.0194 -12.6153zm-8.2725 85.15c-0.4985,0 -0.9819,-0.2187 -1.3101,-0.6173 -8.5054,-10.3506 -11.938,-20.7504 -10.2022,-30.9069 2.5906,-15.1448 16.0091,-26.5536 27.3861,-33.6868l-12.5019 -21.6501c-0.335,-0.5856 -0.2933,-1.3157 0.1087,-1.859 0.4072,-0.5397 1.0902,-0.7902 1.7498,-0.635l58.5871 13.9383c0.4508,0.1093 0.842,0.3986 1.0748,0.8008 0.2332,0.4055 0.2892,0.8855 0.1552,1.3335l-17.2224 57.7037c-0.1936,0.6491 -0.7516,1.1185 -1.4254,1.1996 -0.6702,0.0776 -1.3264,-0.2505 -1.6616,-0.8361l-12.642 -21.8969c-13.6462,4.7095 -31.06,22.7295 -30.4076,35.3307 0.0403,0.7301 -0.3984,1.404 -1.0793,1.6686 -0.1964,0.0775 -0.4058,0.1129 -0.6092,0.1129z"/><path class="fil0" d="M65.6194 147.394l53.0193 12.6117 -11.36 -19.6709c-0.4588,-0.7973 -0.1984,-1.8167 0.5884,-2.2929 11.0462,-6.6924 24.7332,-17.713 27.2132,-32.2299 1.3764,-8.0433 -0.9242,-16.3477 -6.8438,-24.7367 -1.181,6.0042 -5.0448,12.7847 -11.0666,19.244 -6.8862,7.3872 -15.5752,13.2503 -22.6732,15.3035 -0.7468,0.2151 -1.5452,-0.1059 -1.9368,-0.7796l-11.3544 -19.6746 -15.5861 52.2254zm56.4515 16.8626c-0.1302,0 -0.2622,-0.0139 -0.3962,-0.0457l-58.581 -13.9384c-0.4556,-0.1057 -0.8444,-0.3985 -1.0772,-0.8007 -0.2325,-0.4022 -0.2893,-0.8855 -0.1553,-1.33l17.2202 -57.7075c0.1937,-0.6455 0.7538,-1.1181 1.4242,-1.1957 0.6745,-0.0777 1.3265,0.2504 1.6651,0.8361l12.6444 21.8968c13.646,-4.7131 31.0576,-22.7294 30.405,-35.3342 -0.0378,-0.7302 0.3954,-1.404 1.0794,-1.6651 0.6816,-0.2647 1.4536,-0.0635 1.9192,0.501 8.5064,10.354 11.9382,20.7504 10.2024,30.9068 -2.5882,15.1483 -16.0092,26.5572 -27.386,33.6868l12.4996 21.6498c0.338,0.5856 0.2956,1.3161 -0.11,1.8593 -0.3204,0.4339 -0.8292,0.6809 -1.3538,0.6807z"/></g></g><text x="0" y="188.397" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Zoya Khan</text><text x="0" y="193.397" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`,
  },
  {
    href: "/exchange",
    link: "Exchange",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  id="exchange"><path d="M22.57 14.1a1 1 0 0 0-.57.9v3h-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8v3a1 1 0 0 0 1.66.75l6-5.23a1 1 0 0 0 .34-.75 1 1 0 0 0-.38-.76l-6-4.77a1 1 0 0 0-1.05-.14zM9.43 17.9A1 1 0 0 0 10 17v-3h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8V7a1 1 0 0 0-1.66-.75l-6 5.23a1 1 0 0 0-.34.75 1 1 0 0 0 .38.76l6 4.77a1 1 0 0 0 1.05.14z"></path></svg>`,
  },
  {
    href: "/wallet",
    link: "Wallet",
    icon: `<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c3.976 0 8-1.374 8-4s-4.024-4-8-4-8 1.374-8 4 4.024 4 8 4z"/><path d="M4 10c0 2.626 4.024 4 8 4s8-1.374 8-4V8c0 2.626-4.024 4-8 4s-8-1.374-8-4v2z"/><path d="M4 14c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4v2z"/><path d="M4 18c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4v2z"/></svg>`,
  },
  {
    href: "/earn",
    link: "Earn",
    icon: `<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c3.976 0 8-1.374 8-4s-4.024-4-8-4-8 1.374-8 4 4.024 4 8 4z"/><path d="M4 10c0 2.626 4.024 4 8 4s8-1.374 8-4V8c0 2.626-4.024 4-8 4s-8-1.374-8-4v2z"/><path d="M4 14c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4v2z"/><path d="M4 18c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4v2z"/></svg>`,
  },
  {
    href: "/settings",
    link: "Settings",
    icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <title>cog</title>
    <path d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></path>
    </svg>`,
  },
  {
    href: "/help",
    link: "Help",
    icon: `<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"/></svg>`,
  },
];

const inactiveLink = "flex items-center justify-start gap-2";
const activeLink = `bg-gradient-to-r from-violetColor to-grayColor text-secondaryDark py-2 px-4 rounded-3xl ${inactiveLink}`;

export default function MobileSideBar() {
  const { lightMode, setLightMode, toggleBar, setToggleBar } = contextFunc();

  const pathname = usePathname();
  const sideBarRef = useRef();

  const onClose = () => {
    if (toggleBar) {
      setToggleBar(false);
    }
  };

  useEffect(() => {
    const handleSidebarClose = (ev) => {
      if (sideBarRef.current && !sideBarRef.current.contains(ev.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleSidebarClose);

    return () => document.removeEventListener("click", handleSidebarClose);
  }, [toggleBar, onClose]);

  return (
    <div
      ref={sideBarRef}
      className={`mobile-sidebar ${
        lightMode ? "light" : "dark"
      } block md:hidden fixed h-screen left-0 top-14 p-4 z-50 ${
        toggleBar ? "open-sidebar" : "close-sidebar"
      }`}
      style={{ background: lightMode ? "#e9eedf" : "#1f183e" }}
    >
      <ul className="m-0 flex flex-col space-y-4 w-full">
        {sideBarLinks.map((link) => (
          <li key={link.href} onClick={() => setToggleBar(false)}>
            <div style={{ color: lightMode ? "#8b86a1" : "#e9eedf" }}>
              <Link
                href={link.href}
                className={` ${
                  pathname === link.href ? activeLink : inactiveLink
                } w-52 flex items-center space-x-2`}
              >
                <div className="w-5 h-5 flex items-center justify-center my-1">
                  <div dangerouslySetInnerHTML={{ __html: link.icon }} />
                </div>
                <h4>{link.link}</h4>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="w-full flex justify-center absolute bottom-28 right-0 left-0">
        <div className="flex items-center justify-center space-x-2 w-full">
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 40"
              version="1.1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              fill={lightMode ? "#7250ee" : "#8b86a1"}
            >
              <g transform="matrix(1,0,0,1,-296,0)">
                <g transform="matrix(1,0,0,1,0,-185)">
                  <path d="M311,212L311,214C311,214.552 311.448,215 312,215C312.552,215 313,214.552 313,214L313,212C313,211.448 312.552,211 312,211C311.448,211 311,211.448 311,212ZM303.293,208.293L301.293,210.293C300.903,210.683 300.903,211.317 301.293,211.707C301.683,212.097 302.317,212.097 302.707,211.707L304.707,209.707C305.097,209.317 305.097,208.683 304.707,208.293C304.317,207.903 303.683,207.903 303.293,208.293ZM319.293,209.707L321.293,211.707C321.683,212.097 322.317,212.097 322.707,211.707C323.097,211.317 323.097,210.683 322.707,210.293L320.707,208.293C320.317,207.903 319.683,207.903 319.293,208.293C318.903,208.683 318.903,209.317 319.293,209.707ZM312,192C307.033,192 303,196.033 303,201C303,205.967 307.033,210 312,210C316.967,210 321,205.967 321,201C321,196.033 316.967,192 312,192ZM323,202L325,202C325.552,202 326,201.552 326,201C326,200.448 325.552,200 325,200L323,200C322.448,200 322,200.448 322,201C322,201.552 322.448,202 323,202ZM299,202L301,202C301.552,202 302,201.552 302,201C302,200.448 301.552,200 301,200L299,200C298.448,200 298,200.448 298,201C298,201.552 298.448,202 299,202ZM304.707,192.293L302.707,190.293C302.317,189.903 301.683,189.903 301.293,190.293C300.903,190.683 300.903,191.317 301.293,191.707L303.293,193.707C303.683,194.097 304.317,194.097 304.707,193.707C305.097,193.317 305.097,192.683 304.707,192.293ZM320.707,193.707L322.707,191.707C323.097,191.317 323.097,190.683 322.707,190.293C322.317,189.903 321.683,189.903 321.293,190.293L319.293,192.293C318.903,192.683 318.903,193.317 319.293,193.707C319.683,194.097 320.317,194.097 320.707,193.707ZM313,190L313,188C313,187.448 312.552,187 312,187C311.448,187 311,187.448 311,188L311,190C311,190.552 311.448,191 312,191C312.552,191 313,190.552 313,190Z" />
                </g>
              </g>
              <text
                x="0"
                y="47"
                fill="#000000"
                font-size="5px"
                font-weight="bold"
                font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
              >
                Created by Utari Nuraeni
              </text>
              <text
                x="0"
                y="52"
                fill={lightMode ? "#7250ee" : "#8b86a1"}
                font-size="5px"
                font-weight="bold"
                font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
              >
                from the Noun Project
              </text>
            </svg>
          </div>

          <button
            type="button"
            className={`flex items-center justify-end rounded-3xl w-[40px] h-[25px] p-1`}
            style={{ backgroundColor: lightMode ? "#8b86a1" : "#463a6c" }}
          >
            <div
              onClick={() => setLightMode((prev) => !prev)}
              className={`rounded-full w-[20px] h-[20px] transform bg-primaryColor cursor-pointer ${
                lightMode ? "set-light-mode" : "set-dark-mode"
              }`}
            />
          </button>

          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 32 40"
              enable-background="new 0 0 32 32"
              fill={lightMode ? "#8b86a1" : "#7250ee"}
            >
              <path d="M31,16.7c-0.3-0.1-0.7,0-0.9,0.2c-2,2.4-5,3.7-8.1,3.7c-5.9,0-10.7-4.8-10.7-10.7c0-3.1,1.3-6,3.7-8.1  c0.3-0.2,0.3-0.6,0.2-0.9c-0.1-0.3-0.4-0.5-0.8-0.5c-8,0.8-14,7.4-14,15.5c0,8.6,7,15.5,15.5,15.5c8,0,14.7-6,15.5-14  C31.5,17.1,31.3,16.8,31,16.7z" />
              <text
                x="0"
                y="47"
                fill="#000000"
                font-size="5px"
                font-weight="bold"
                font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
              >
                Created by Creative Stall
              </text>
              <text
                x="0"
                y="52"
                fill={lightMode ? "#8b86a1" : "#7250ee"}
                font-size="5px"
                font-weight="bold"
                font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
              >
                from the Noun Project
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
