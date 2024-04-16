export function formatPrice(price, decimalPlaces = 2, seperator = ",") {
  const parts = price.toFixed(decimalPlaces).toString().split(".");
  let formatedPrice = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, seperator);

  if (decimalPlaces > 0) {
    formatedPrice += "." + parts[1];
  }

  return formatedPrice;
}
