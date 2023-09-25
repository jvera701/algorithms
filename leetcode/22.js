/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];
  const isValid = (str) => {
    const stack = [];
    for (const letter of str) {
      if (letter === "(") {
        stack.push("(");
      } else {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  };

  const recursive = (string) => {
    if (string.length === 2 * n) {
      isValid(string) && answer.push(string);
    } else {
      recursive(string + "(");
      recursive(string + ")");
    }
  };

  recursive("");
  return answer;
};
