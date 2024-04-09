import { TailSpin } from "react-loader-spinner";
import { contextFunc } from "./useStateContext/StateContext";

export default function Spinner() {
  const { lightMode } = contextFunc();

  return (
    <div className="w-full h-full flex justify-center items-center fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-loading z-[100] pointer-event-none">
      <TailSpin
        height="80"
        width="80"
        color={`${lightMode ? '#7250ee' : '#fff'}`}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
