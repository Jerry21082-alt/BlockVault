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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" 0 0 100 100;" xml:space="preserve"><path d="M14.7,45.9h39.1H63h23.4c1.2,0,1.8-1.4,0.9-2.2L55.7,14.1c-0.8-0.8-2.2-0.2-2.2,1l0.2,17.9h-39c-1.3,0-2.4,1.1-2.4,2.4v8.3  C12.3,44.9,13.4,45.9,14.7,45.9z"/><path d="M87.7,64.7v-8.3c0-1.3-1.1-2.4-2.4-2.4H46.2H37H13.6c-1.2,0-1.8,1.4-0.9,2.2l31.6,29.6c0.8,0.8,2.2,0.2,2.2-1l-0.2-17.9h39  C86.6,67.1,87.7,66.1,87.7,64.7z"/><text x="0" y="115"</svg>`,
  },
  {
    href: "/exchange",
    link: "Exchange",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  id="exchange"><path d="M22.57 14.1a1 1 0 0 0-.57.9v3h-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8v3a1 1 0 0 0 1.66.75l6-5.23a1 1 0 0 0 .34-.75 1 1 0 0 0-.38-.76l-6-4.77a1 1 0 0 0-1.05-.14zM9.43 17.9A1 1 0 0 0 10 17v-3h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8V7a1 1 0 0 0-1.66-.75l-6 5.23a1 1 0 0 0-.34.75 1 1 0 0 0 .38.76l6 4.77a1 1 0 0 0 1.05.14z"></path></svg>`,
  },
  {
    href: "/wallet",
    link: "Wallet",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
    <path d="m45.078 19.672-7.5781 13.141h-6.6719l9.25-16.031zm4.6875-8.125-3.1094 5.4062-6.3594-3.6719c-0.75-0.42188-1.7031-0.17188-2.1406 0.57812l-10.938 18.953h-7.2188l14.312-24.781c0.625-1.0938 1.625-1.8594 2.8438-2.1875 1.2031-0.32812 2.4688-0.15625 3.5469 0.46875zm12 4.2344-9.8281 17.031h25.25l3.5156-6.0938zm-46.141 7.6562c-6.0312 0-10.938 4.9062-10.938 10.938v1.7344c1.9844-2.0312 4.75-3.2969 7.8125-3.2969h3.8906l5.4219-9.375zm75.547 3.9062-3.1719 5.5c-0.15625-0.03125-0.32812-0.03125-0.5-0.03125h-6.7188l3.4062-5.8906c0.4375-0.75 0.1875-1.7031-0.5625-2.125l-21.656-12.5c-0.35938-0.21875-0.78125-0.26562-1.1875-0.15625-0.39062 0.09375-0.73438 0.35938-0.95312 0.71875l-11.516 19.953h-7.2188l14.891-25.781c0.625-1.0781 1.6406-1.8594 2.8438-2.1875 1.2188-0.3125 2.4688-0.15625 3.5625 0.46875l27.062 15.625c1.0781 0.625 1.8594 1.6406 2.1875 2.8438 0.3125 1.2188 0.15625 2.4844-0.46875 3.5625zm-14.609 39.844c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625-1.5625 0.69922-1.5625 1.5625 0.69922 1.5625 1.5625 1.5625zm-7.8125-9.375h26.562v15.625h-26.562c-0.86328 0-1.5625-0.69922-1.5625-1.5625v-12.5c0-0.86328 0.69922-1.5625 1.5625-1.5625zm3.125 7.8125c0 2.5859 2.1016 4.6875 4.6875 4.6875s4.6875-2.1016 4.6875-4.6875-2.1016-4.6875-4.6875-4.6875-4.6875 2.1016-4.6875 4.6875zm-3.125 10.938c-2.5859 0-4.6875-2.1016-4.6875-4.6875v-12.5c0-2.5859 2.1016-4.6875 4.6875-4.6875h26.562v-10.938c0-4.3086-3.5039-7.8125-7.8125-7.8125h-75c-4.3086 0-7.8125 3.5039-7.8125 7.8125v43.75c0 4.3086 3.5039 7.8125 7.8125 7.8125h75c4.3086 0 7.8125-3.5039 7.8125-7.8125v-10.938z"/>
   </svg>`,
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
              fill={lightMode ? "#7250ee" : "#8b86a1"}
            >
              <g transform="matrix(1,0,0,1,-296,0)">
                <g transform="matrix(1,0,0,1,0,-185)">
                  <path d="M311,212L311,214C311,214.552 311.448,215 312,215C312.552,215 313,214.552 313,214L313,212C313,211.448 312.552,211 312,211C311.448,211 311,211.448 311,212ZM303.293,208.293L301.293,210.293C300.903,210.683 300.903,211.317 301.293,211.707C301.683,212.097 302.317,212.097 302.707,211.707L304.707,209.707C305.097,209.317 305.097,208.683 304.707,208.293C304.317,207.903 303.683,207.903 303.293,208.293ZM319.293,209.707L321.293,211.707C321.683,212.097 322.317,212.097 322.707,211.707C323.097,211.317 323.097,210.683 322.707,210.293L320.707,208.293C320.317,207.903 319.683,207.903 319.293,208.293C318.903,208.683 318.903,209.317 319.293,209.707ZM312,192C307.033,192 303,196.033 303,201C303,205.967 307.033,210 312,210C316.967,210 321,205.967 321,201C321,196.033 316.967,192 312,192ZM323,202L325,202C325.552,202 326,201.552 326,201C326,200.448 325.552,200 325,200L323,200C322.448,200 322,200.448 322,201C322,201.552 322.448,202 323,202ZM299,202L301,202C301.552,202 302,201.552 302,201C302,200.448 301.552,200 301,200L299,200C298.448,200 298,200.448 298,201C298,201.552 298.448,202 299,202ZM304.707,192.293L302.707,190.293C302.317,189.903 301.683,189.903 301.293,190.293C300.903,190.683 300.903,191.317 301.293,191.707L303.293,193.707C303.683,194.097 304.317,194.097 304.707,193.707C305.097,193.317 305.097,192.683 304.707,192.293ZM320.707,193.707L322.707,191.707C323.097,191.317 323.097,190.683 322.707,190.293C322.317,189.903 321.683,189.903 321.293,190.293L319.293,192.293C318.903,192.683 318.903,193.317 319.293,193.707C319.683,194.097 320.317,194.097 320.707,193.707ZM313,190L313,188C313,187.448 312.552,187 312,187C311.448,187 311,187.448 311,188L311,190C311,190.552 311.448,191 312,191C312.552,191 313,190.552 313,190Z" />
                </g>
              </g>
              
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
              fill={lightMode ? "#8b86a1" : "#7250ee"}
            >
              <path d="M31,16.7c-0.3-0.1-0.7,0-0.9,0.2c-2,2.4-5,3.7-8.1,3.7c-5.9,0-10.7-4.8-10.7-10.7c0-3.1,1.3-6,3.7-8.1  c0.3-0.2,0.3-0.6,0.2-0.9c-0.1-0.3-0.4-0.5-0.8-0.5c-8,0.8-14,7.4-14,15.5c0,8.6,7,15.5,15.5,15.5c8,0,14.7-6,15.5-14  C31.5,17.1,31.3,16.8,31,16.7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
