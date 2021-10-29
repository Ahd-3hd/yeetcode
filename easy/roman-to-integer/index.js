var romanToInt = function (s) {
  const digits = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const substractionSequences = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let arr = [];

  for (let i = 0; i < s.length; i++) {
    const combination = s[i] + s[i + 1];
    if (substractionSequences[combination]) {
      arr.push(substractionSequences[combination]);
      i = i + 1;
    } else {
      arr.push(digits[s[i]]);
    }
  }
  return arr.reduce((a, b) => a + b);
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
