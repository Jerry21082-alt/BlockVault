import "./globals.css";
import "../styles/typography.css";
import StateContext from "@/components/useStateContext/StateContext";

export const metadata = {
  title: "Block Vault",
  description:
    "This project showcases a comprehensive CryptoWeb Application designed to enhance user experience by providing real-time cryptocurrency data visualization. It features interactive candlestick charts and seamless data fetching from an external API, offering users a dynamic and informative platform for tracking cryptocurrency trends.",
};

export default function layout({ children }) {
  return (
    <html lang="en" className="h-full">
      <StateContext>
        <body>{children}</body>
      </StateContext>
    </html>
  );
}
