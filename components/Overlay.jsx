import { contextFunc } from "./useStateContext/StateContext";

export default function Overlay() {
  const { toggleBar } = contextFunc();

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-20 block bg-none md:hidden"
      style={{
        display: toggleBar ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transition: "background-color 0.3s ease-in-out",
      }}
    ></div>
  );
}
