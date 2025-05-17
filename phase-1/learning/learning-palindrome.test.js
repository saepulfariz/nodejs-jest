const { run } = require("./learning-palindrome");

test("Learning Palindrome - #1", () => {
  var n = "wadidaw";
  var result = "benar";
  expect(run(n)).toBe(result);
});
