import { contextFunc } from "./useStateContext/StateContext";

export default function NotificationPanel() {
  const { toggleNotification, lightMode } = contextFunc();
  return (
    <div
      className={`${
        toggleNotification
          ? "w-[90vw] md:w-[30vw] h-[114px] fixed top-[9%] right-2 p-2 rounded-xl z-[100]"
          : "hidden"
      } bg-${lightMode ? 'grayColor' : 'secondaryLight'}`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <h3 className="text-snow">No new notification</h3>
      </div>
    </div>
  );
}
