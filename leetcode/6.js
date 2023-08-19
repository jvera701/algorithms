var convert = function (s, numRows) {
  var matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix.push([]);
  }

  var down = true;
  var k = 0;
  for (let i = 0; i < s.length; i++) {
    if (k >= numRows) {
      down = false;
      k = numRows - 2 >= 0 ? numRows - 2 : 0;
    }
    if (k === 0) {
      down = true;
    }
    matrix[k].push(s[i]);

    if (down) {
      k++;
    } else {
      k--;
    }
  }

  var answer = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      answer += matrix[i][j];
    }
  }
  return answer;
};
