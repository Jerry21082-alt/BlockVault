import "./globals.css";
import "../styles/typography.css";
import StateContext from "@/components/useStateContext/StateContext";

// export const metaData = {
//   title: "Cryoto-app",
//   description: "best crypto app",
// };

export default function layout({ children }) {
  return (
    <html lang="en" className="h-full">
      <StateContext>
        <body>{children}</body>
      </StateContext>
    </html>
  );
}
