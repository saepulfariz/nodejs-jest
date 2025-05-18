const { run } = require("./quiz-competition-at-school");

test("Quiz Competition At School - #1", () => {
  var x = [10, 20, 30, 10, 80, 100];
  var result = {
    10: 2,
    20: 1,
    30: 1,
    80: 1,
    100: 1,
  };

  expect(run(x)).toEqual(result);
});

test("Quiz Competition At School - #2", () => {
  var x = [1, 2, 2, 5, 7, 5, 2, 4, 6];
  var result = {
    1: 1,
    2: 3,
    4: 1,
    6: 1,
    7: 1,
    5: 2,
  };

  expect(run(x)).toEqual(result);
});

test("Quiz Competition At School - #3", () => {
  var x = [13, 21, 89, 97, 21, 13, 89, 21];
  var result = { 13: 2, 21: 3, 89: 1, 97: 1 };

  expect(run(x)).toEqual(result);
});

test("Quiz Competition At School - #4", () => {
  var x = [1.2, 5.7, 8.9, 1.2, 5.5, 3.4, 8.9, 8.9];
  var result = {
    1.2: 2,
    5.7: 1,
    5.5: 1,
    8.9: 3,
    3.4: 1,
  };

  expect(run(x)).toEqual(result);
});

test("Quiz Competition At School - #5", () => {
  var x = [128, 284, 223, 809, 109, 284, 188, 128];
  var result = {
    128: 2,
    284: 2,
    223: 1,
    809: 1,
    109: 1,
    188: 1,
  };

  expect(run(x)).toEqual(result);
});
