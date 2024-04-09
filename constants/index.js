import {
  bitcoin,
  ethereum,
  tellor,
  tether,
  bnb,
  usdCoin,
  xrp,
  litecoin,
  polkadot,
  dash,
  avalanche,
} from "@/public/crypto-assets";

import { img1, img2, img3 } from "@/public/images";

export const onBoardingContent = [
  {
    title: "Introduction to the Cryptocurrency Web Application",
    lists: [
      "Overview of the application's purpose and benefits.",
      "How the web application simpifies cryptocurrency management.",
      "Key features and advantages of using the web application",
    ],
  },
  {
    title: "Getting Started",
    lists: [
      "Create an account and write up your profile.",
      "Connect your cryptocurrency exchange accounts.",
      "Configure security settings and two-factor authentication.",
    ],
  },
  {
    title: "Adding and Tracking Your Cryptocurrency Portfolio",
    lists: [
      "Add your cryptocurrency holding to the application.",
      "Automatically sync your portfolio to a connected Exchange accounts.",
      "Track multi-time prices and porfolio performance.",
    ],
  },
  {
    title: "Porfolio Analysis and Insights",
    lists: [
      "Analyse your portfolio's authcation and qualification.",
      "View performance matrices, including gains/access and stock",
      "Overate comprehencive reports and evaluations.",
    ],
  },
  {
    title: "Transaction Management",
    lists: [
      "Record and intergrate cryptocurrency transactions.",
      "Track buy/sell orders, deposits and withdrawals.",
      "Calculate gains, losses and low implications.",
    ],
  },
  {
    title: "Advanced Features",
    lists: [
      "Set price ammount and notifications for specific cryptocurrencies.",
      "Explore price charts and market trends.",
      "Utilize advanced tools for technical analysis.",
    ],
  },
  {
    title: "News and Market Data",
    lists: [
      "Access multi-time cryptocurrency news and updates",
      "Monitor market data and global trends.",
      "Stay informed with commulative news trends.",
    ],
  },
  {
    title: "Security and Privacy Measures",
    lists: [
      "Understand the applications's security protocols.",
      "Safeguard your account important information.",
      "Use the application for security cryptocurrency management.",
    ],
  },
];

export const transactionHistory = [
  {
    date: { month: "May", day: 13 },
    amount: { price: "0.0020 BTC", rate: 245 },
    transact: "Recieved",
    transactName: "Mauris",
    image: img1,
  },
  {
    date: { month: "Jun", day: 3 },
    amount: { price: "0.0020 Eth", rate: 634 },
    transact: "Recieved",
    transactName: "Naomi",
    image: img2,
  },
  {
    date: { month: "May", day: 13 },
    amount: { price: "0.00120 BTC", rate: 2345 },
    transact: "Recieved",
    transactName: "Edmond",
    image: img3,
  },
  {
    date: { month: "Aug", day: 8 },
    amount: { price: "0.00120 BTC", rate: 2345 },
    transact: "Recieved",
    transactName: "James",
    image: img1,
  },
  {
    date: { month: "Sep", day: 25 },
    amount: { price: "0.000120 BTC", rate: 2345 },
    transact: "Recieved",
    transactName: "Author",
    image: img2,
  },
];

export const paymentPartner = [
  {
    currency: bitcoin,
    price: {
      usdt: "77,123.00",
      usdc: "36,500.00",
      btc: "63,349.00",
      eth: "51,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: ethereum,
    price: {
      usdt: "27,123.00",
      usdc: "51,500.00",
      btc: "33,349.00",
      eth: "21,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: tether,
    price: {
      usdt: "43,123.00",
      usdc: "56,500.00",
      btc: "20,349.00",
      eth: "3,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: bnb,
    price: {
      usdt: "90,123.00",
      usdc: "27,500.00",
      btc: "30,349.00",
      eth: "18,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: usdCoin,
    price: {
      usdt: "20,123.00",
      usdc: "41,500.00",
      btc: "22,349.00",
      eth: "32,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: dash,
    price: {
      usdt: "80,123.00",
      usdc: "71,500.00",
      btc: "10,349.00",
      eth: "28,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: tellor,
    price: {
      usdt: "19,123.00",
      usdc: "25,500.00",
      btc: "13,349.00",
      eth: "3,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: litecoin,
    price: {
      usdt: "10,123.00",
      usdc: "11,500.00",
      btc: "80,349.00",
      eth: "3,876.00",
    },
    limit: "15-50.00",
  },
  {
    currency: polkadot,
    price: {
      usdt: "60,123.00",
      usdc: "41,500.00",
      btc: "40,349.00",
      eth: "18,876.00",
    },
    limit: "15-50.00",
  },
];

export const wallet = [
  {
    currency: bitcoin,
    currencyName: "Bitcoin",
    rate: "0.001 BTC - $33.77",
    abbrev: "BTC",
  },
  {
    currency: dash,
    currencyName: "Dash",
    rate: "0.001 BTC - $33.77",
    abbrev: "DSH",
  },
  {
    currency: ethereum,
    currencyName: "Ethereum",
    rate: "0.001 BTC - $33.77",
    abbrev: "ETH",
  },
  {
    currency: litecoin,
    currencyName: "Litecoin",
    rate: "0.001 BTC - $33.77",
    abbrev: "LIT",
  },
];

export const exchangeCard = [
  {
    icon: bitcoin,
    name: "Bitcoin",
    currentPrice: 1.88,
    position: {
      gain: true,
      point: 0.04,
    },
  },
  {
    icon: avalanche,
    name: "avalanche",
    currentPrice: 13.09,
    position: {
      gain: false,
      point: 0.28,
    },
  },
  {
    icon: ethereum,
    name: "ethereum",
    currentPrice: 40.78,
    position: {
      gain: true,
      point: 35,
    },
  },
  {
    icon: polkadot,
    name: "polkadot",
    currentPrice: 20.41,
    position: {
      gain: false,
      point: 4.54,
    },
  },
];

export const earnCard = [
  {
    icon: litecoin,
    name: "Litecoin",
    pos: "Fixed",
    rate: 6.5,
  },
  {
    icon: xrp,
    name: "Xrp",
    pos: "Flexible",
    rate: 14.9,
  },
  {
    icon: bitcoin,
    name: "Bitcoin",
    pos: "Flexible",
    rate: 8.12,
  },
  {
    icon: bnb,
    name: "Bnb",
    pos: "Fixed",
    rate: 21.7,
  },
  {
    icon: tellor,
    name: "Tellor",
    pos: "Flexible",
    rate: 5.5,
  },
  {
    icon: polkadot,
    name: "Polkadot",
    pos: "Fixed",
    rate: 10.19,
  },
  {
    icon: ethereum,
    name: "Ethereum",
    pos: "Flexible",
    rate: 59.7,
  },
  {
    icon: usdCoin,
    name: "Usdcoin",
    pos: "Flexible",
    rate: 3.2,
  },
];

export const stakingPool = [
  {
    icon: tether,
    name: "TETH",
    pos: "Flexible",
    percentage: 32.0,
    isSub: true,
  },
  {
    icon: bitcoin,
    name: "BTC",
    pos: "Fixed",
    percentage: 14.93,
    isSub: false,
  },
  {
    icon: tellor,
    name: "TELL",
    pos: "Flexible",
    percentage: 9.65,
    isSub: false,
  },
  {
    icon: dash,
    name: "DSH",
    pos: "Fixed",
    percentage: 42.45,
    isSub: false,
  },
  {
    icon: xrp,
    name: "XRP",
    pos: "Fixed",
    percentage: 2.89,
    isSub: false,
  },
  {
    icon: polkadot,
    name: "DOT",
    pos: "Flexible",
    percentage: 18.02,
    isSub: false,
  },
  {
    icon: usdCoin,
    name: "USDC",
    pos: "Flexible",
    percentage: 22.8,
    isSub: false,
  },
  {
    icon: bnb,
    name: "BNB",
    pos: "Flexible",
    percentage: 3.62,
    isSub: false,
  },
  {
    icon: avalanche,
    name: "AVA",
    pos: "Flexible",
    percentage: 5.77,
    isSub: false,
  },
  {
    icon: litecoin,
    name: "LIT",
    pos: "Fixed",
    percentage: 52.3,
    isSub: false,
  },
  {
    icon: ethereum,
    name: "ETH",
    pos: "Flexible",
    percentage: 62.99,
    isSub: false,
  },
];

export const market = [
  {
    icon: bitcoin,
    name: {
      full: "Bitcoin",
      short: "BTC",
    },
    price: 30.45,
    time: {
      hr: 0.78,
      day: 0.57,
      week: 14.84,
    },
    cap: 59,
    vol: 16,
    depreciation: false,
  },
  {
    icon: ethereum,
    name: {
      full: "Ethereum",
      short: "ETH",
    },
    price: 25.43,
    time: {
      hr: 0.19,
      day: 0.82,
      week: 2.44,
    },
    cap: 911,
    vol: 383,
    depreciation: false,
  },
  {
    icon: litecoin,
    name: {
      full: "Litecoin",
      short: "LIT",
    },
    price: 10.45,
    time: {
      hr: 3.48,
      day: 0.25,
      week: 10.32,
    },
    cap: 627,
    vol: 512,
    depreciation: true,
  },
  {
    icon: tether,
    name: {
      full: "Tether",
      short: "TET",
    },
    price: 704.23,
    time: {
      hr: 0.43,
      day: 0.97,
      week: 15.84,
    },
    cap: 597,
    vol: 162,
    depreciation: false,
  },
  {
    icon: dash,
    name: {
      full: "Dash",
      short: "DSH",
    },
    price: 307.45,
    time: {
      hr: 0.78,
      day: 0.57,
      week: 14.84,
    },
    cap: 597,
    vol: 162,
    depreciation: false,
  },
  {
    icon: tellor,
    name: {
      full: "Tellor",
      short: "TEL",
    },
    price: 307.45,
    time: {
      hr: 0.38,
      day: 0.17,
      week: 54.84,
    },
    cap: 807,
    vol: 142,
    depreciation: true,
  },
  {
    icon: avalanche,
    name: {
      full: "Avalanche",
      short: "AVA",
    },
    price: 207.12,
    time: {
      hr: 0.18,
      day: 0.77,
      week: 22.84,
    },
    cap: 597,
    vol: 162,
    depreciation: true,
  },
  {
    icon: bnb,
    name: {
      full: "Bnb",
      short: "BNB",
    },
    price: 30.45,
    time: {
      hr: 0.78,
      day: 0.57,
      week: 14.84,
    },
    cap: 597,
    vol: 162,
    depreciation: false,
  },
  {
    icon: polkadot,
    name: {
      full: "Polkadot",
      short: "POL",
    },
    price: 30.45,
    time: {
      hr: 0.78,
      day: 0.57,
      week: 14.84,
    },
    cap: 597,
    vol: 162,
    depreciation: true,
  },
];

export const marketDetails = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
};

export const mockStockQuotes = {
  c: 261.74,
  h: 263.31,
  l: 260.68,
  o: 261.07,
  pc: 259.45,
  t: 1582641000,
};

export const mockHistoricalData = {
  c: [
    222.49, 221.5, 220.24, 210.43, 230.63, 222.13, 200.03, 201.43, 202.53,
    212.23, 221.9, 220.73, 224.33, 228.93, 222.45, 211.11
  ],
  h: [217.68, 221.03, 219.89],
  l: [217.19, 217.1402, 218.83],
  o: [221.03, 218.55, 220],
  s: "ok",
  t: [
    2023 - 11 - 1,
    2023 - 11 - 2,
    2023 - 11 - 3,
    2023 - 11 - 4,
    2023 - 11 - 5,
    2023 - 11 - 6,
    2023 - 11 - 7,
    2023 - 11 - 8,
    2023 - 11 - 9,
    2023 - 11 - 10,
    2023 - 11 - 11,
    2023 - 11 - 12,
    2023 - 11 - 13,
    2023 - 11 - 14,
    2023 - 11 - 15,
    2023 - 11 - 16,
    2023 - 11 - 17,
    2023 - 11 - 18,
    2023 - 11 - 19,
    2023 - 11 - 20,
    2023 - 11 - 21,
    2023 - 11 - 22,
    2023 - 11 - 23,
  ],
  v: [33463820, 24018876, 20730608],
};

