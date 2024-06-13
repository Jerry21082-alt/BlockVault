export function generateStockCandles(range) {
  const candles = [];

  const startDate = new Date("2024-4-01").getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  // Start with a base price
  let previousClose = Math.random() * (300 - 200) + 100;

  for (let i = 0; i < range; i++) {
    const open = previousClose + (Math.random() - 0.5) * 5;
    const close = open + (Math.random() - 0.5) * 5;
    const high = Math.max(open, close) + Math.random() * 2.5;
    const low = Math.min(open, close) - Math.random() * 2.5;
    const volume = Math.floor(Math.random() * (50000000 - 10000000) + 10000000);

    previousClose = close;

    const candle = {
      c: close,
      h: high,
      l: low,
      o: open,
      s: "ok",
      t: startDate + i * oneDay,
      v: volume,
    };

    candles.push(candle);
  }

  return candles;
}
