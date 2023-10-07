function majorityElement(nums: number[]): number {
  let cand;
  let count = 0;
  const obj = {};
  for (const num of nums) {
    if (count === 0) {
      cand = num;
    }
    const add = num === cand ? 1 : -1;
    count += add;
  }

  return cand;
}
