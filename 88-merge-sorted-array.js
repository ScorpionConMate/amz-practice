/**
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
function merge(nums1, m, nums2, n) {
  // La mejor forma para resolverlo es usando la tecnica de two-pointers
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let pointer = m + n - 1;

  // Merge desde el final al inicio de nums1 y nums2
  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[pointer] = nums1[pointer1];
      pointer1 -= 1;
    } else {
      nums1[pointer] = nums2[pointer2];
      pointer2 -= 1;
    }
    pointer -= 1;
  }
  // Si quedan elementos pendientes en nums2, agregarlos a nums1
  while (pointer2 >= 0) {
    nums1[pointer] = nums2[pointer2];
    pointer2 -= 1;
    pointer -= 1;
  }
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
