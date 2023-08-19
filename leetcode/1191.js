function sum(arr) {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
}

// Using Kadane algorithm
function maxSub(arr) {
  var best_sum = 0;
  var current = 0;
  for (const x of arr) {
    current = Math.max(0, x + current);
    best_sum = Math.max(best_sum, current);
  }
  return best_sum;
}

var kConcatenationMaxSum = function (arr, k) {
  const MODULO = 10 ** 9 + 7;

  if (k === 1) {
    return maxSub(arr) % MODULO;
  } else {
    let twiceArr = [...arr, ...arr];
    const subSum = (k - 2) * sum(arr);
    const solDouble = maxSub(twiceArr);

    return Math.max(solDouble, solDouble + subSum, subSum) % MODULO;
  }
};
