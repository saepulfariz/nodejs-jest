const { run } = require("./learning-palindrome");

test("Learning Palindrome - #1", () => {
  var n = "wadidaw";
  var result = "benar";
  expect(run(n)).toBe(result);
});

test("Learning Palindrome - #2", () => {
  var n = "12/02/2021";
  var result = "benar";
  expect(run(n)).toBe(result);
});

test("Learning Palindrome - #3", () => {
  var n = "jabar";
  var result = "salah";
  expect(run(n)).toBe(result);
});

test("Learning Palindrome - #4", () => {
  var n = "dont’t nod";
  var result = "benar";
  expect(run(n)).toBe(result);
});

test("Learning Palindrome - #5", () => {
  var n = "forwards";
  var result = "salah";
  expect(run(n)).toBe(result);
});
