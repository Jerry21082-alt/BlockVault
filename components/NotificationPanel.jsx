"use client";

import { useEffect, useRef, useState } from "react";
import { contextFunc } from "./useStateContext/StateContext";

export default function NotificationPanel() {
  const { toggleNotification, setToggleNotification, lightMode } =
    contextFunc();
  const notRef = useRef();

  const onClose = () => setToggleNotification(false);

  useEffect(() => {
    const handlePopUp = (ev) => {
      if (ev.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handlePopUp);

    return () => document.removeEventListener("keydown", handlePopUp);
  }, [toggleNotification, onClose]);

  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (notRef.current && !notRef.current.contains(ev.target)) onClose();
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggleNotification, onClose]);

  return (
    <div
      ref={notRef}
      className={`w-[90vw] md:w-[30vw] h-20 fixed top-[9%] right-2 p-2 bg-primaryColor rounded-xl z-[200] ${
        toggleNotification ? "open-notification" : "close-notification"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-snow">No new notification</p>
      </div>
    </div>
  );
}
