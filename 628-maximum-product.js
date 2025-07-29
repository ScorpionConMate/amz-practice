/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maximumProduct(nums) {
  const s = nums.sort((a, b) => b - a);
  return Math.max(s[0] * s[1] * s[2], s[0] * s[s.length - 1] * s[s.length - 2]);
}
console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); // 39200
console.log(maximumProduct([-100, -2, -3, 1])); // 300
