const { run } = require("./discount-ramadhan");

test("Discount Ramadhan - #1", () => {
  var n = 11898;
  var result = 11898;
  expect(run(n)).toBe(result);
});
