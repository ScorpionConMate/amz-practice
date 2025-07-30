/**
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function canJump(nums) {
  let last = nums.length - 1;
  for (let index = last - 1; index >= 0; index--) {
    if (nums[index] + index >= last) last = index;
  }
  return last === 0;
}

// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
console.log(canJump([3, 2, 1, 0, 4])); // Output: false

console.log(canJump([0, 1]));
