/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    const number = (i + k) % nums.length;
    dict[number] = item;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = dict[i];
  }
};
