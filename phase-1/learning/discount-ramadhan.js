function run(n) {
  var discount = 0;
  if (n > 50000) {
    discount = 15;
  } else if (n > 35000) {
    discount = 10;
  } else if (n > 20000) {
    discount = 5;
  }
  var price_discount = (n * discount) / 100;
  var price_total = n - price_discount;
  return Math.ceil(price_total);
}

module.exports = { run };
