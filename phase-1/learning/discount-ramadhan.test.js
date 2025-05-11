const { run } = require("./discount-ramadhan");

test("Discount Ramadhan - #1", () => {
  var n = 11898;
  var result = 11898;
  expect(run(n)).toBe(result);
});

test("Discount Ramadhan - #2", () => {
  var n = 23303;
  var result = 22138;
  expect(run(n)).toBe(result);
});

test("Discount Ramadhan - #3", () => {
  var n = 38000;
  var result = 34200;
  expect(run(n)).toBe(result);
});

test("Discount Ramadhan - #4", () => {
  var n = 42500;
  var result = 38250;
  expect(run(n)).toBe(result);
});

test("Discount Ramadhan - #5", () => {
  var n = 280324;
  var result = 238276;
  expect(run(n)).toBe(result);
});
