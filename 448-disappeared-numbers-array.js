// 448. Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function findDisappearedNumbers(nums) {
  for (let index = 0; index < nums.length; index++) {
    const v = Math.abs(nums[index]) - 1;
    if (nums[v] > 0) nums[v] = -nums[v];
  }

  const result = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) result.push(index + 1);
  }
  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5,6]

console.log(findDisappearedNumbers([1, 1])); // Output: [2]

console.log(findDisappearedNumbers([1, 1, 2, 2])); // [3,4]
