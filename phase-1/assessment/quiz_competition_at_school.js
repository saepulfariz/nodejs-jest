function run(arr) {
  var result = {};
  for (let index = 0; index < arr.length; index++) {
    const number = arr[index];
    if (result[number]) {
      result[number]++;
    } else {
      result[number] = 1;
    }
  }
  return result;
}

module.exports = { run };
