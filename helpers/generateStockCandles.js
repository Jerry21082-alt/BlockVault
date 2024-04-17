export function generateStockCandles(range) {
  const candles = [];

  const startDate = new Date("2024-4-01").getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  for (let i = 0; i < range; i++) {
    const open = Math.random() * (300 - 200) + 100;
    const close = Math.random() * (300 - 200) + 100;
    const high = Math.max(open, close) + Math.random() * 20;
    const low = Math.min(open, close) - Math.random() * 20;
    const volume = Math.floor(Math.random() * (50000000 - 10000000) + 10000000);

    const candle = {
      c: [close],
      h: [high],
      l: [low],
      o: [open],
      s: "ok",
      t: [startDate + i * oneDay],
      v: [volume],
    };

    candles.push(candle);
  }

  return candles;
}
