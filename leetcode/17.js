const ansDict = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let answer = [];

  for (let i = 0; i < digits.length; i++) {
    const list = ansDict[digits[i]];
    if (answer.length === 0) {
      answer = list;
    } else {
      let newAnswer = [];
      for (let j = 0; j < answer.length; j++) {
        const newLetter = answer[j];
        for (let k = 0; k < list.length; k++) {
          newAnswer.push(newLetter + list[k]);
        }
      }
      answer = newAnswer;
    }
  }
  return answer;
};
