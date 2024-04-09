const baseUrl = "https://finnhub.io/api/v1";
const polygonUrl = 'https://api.polygon.io';

const errMsg = "sorry! an error occured";

export const searchSymbols = async (query) => {
  const finnhub_api_key = process.env.REACT_APP_FINNHUB_API_KEY;

  const url = `${baseUrl}/search?q=${query}&token=${"clkpg6hr01qkcrcg78igclkpg6hr01qkcrcg78j0"}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${errMsg}: ${response.status}`);
  }

  return response.json();
};

export const fetchStockDetails = async (symbol) => {
  const url = `${baseUrl}/stock/profile2?symbol=${symbol}&token=clkpg6hr01qkcrcg78igclkpg6hr01qkcrcg78j0`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${errMsg}: ${response.status}`);
  }

  return response.json();
};

export const fetchStockQuotes = async (symbol) => {
  const url = `${baseUrl}/quote?symbol=${symbol}&token=clkpg6hr01qkcrcg78igclkpg6hr01qkcrcg78j0`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${errMsg}: ${response.status}`);
  }

  return response.json();
};

export const fetchPolygonData = async () => { 
  const url = `${polygonUrl}/v2/aggs/ticker/X:BTCUSD/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=uEO9dLP9JE97FnSdS5zVLZFXLguS9_Zf`

  const response = await fetch(url);

  if(!response.ok) { 
    throw new Error(`${errMsg}: ${response.status}`);
  }

  return response.json();
}     