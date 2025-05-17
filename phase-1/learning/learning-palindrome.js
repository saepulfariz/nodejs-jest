function run(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    return "benar";
  } else {
    return "salah";
  }
}

module.exports = { run };
