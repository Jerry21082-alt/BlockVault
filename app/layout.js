import "./globals.css";
import { Nav, SideBar } from "@/components/pageFiles";
import StateContext from "@/components/useStateContext/StateContext";

// export const metaData = {
//   title: "Cryoto-app",
//   description: "best crypto app",
// };

export default function layout({ children }) {
  return (
    <html lang="en">
      <StateContext>
        <body>{children}</body>
      </StateContext>
    </html>
  );
}
