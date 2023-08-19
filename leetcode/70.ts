const dict = {
  0: 1,
  1: 1,
};

function climbStairs(n: number): number {
  if (n.toString() in dict) {
    return dict[n];
  } else {
    const answer = climbStairs(n - 1) + climbStairs(n - 2);
    dict[n] = answer;
    return answer;
  }
}
