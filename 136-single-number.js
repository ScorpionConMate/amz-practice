/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const map = {};

  // Hashmap para validar ocurrencias del numero
  for (const num of nums) {
    if (num in map) map[num] += 1;
    else map[num] = 1;
  }
  // En el hashmap, devolvemos la key que solo tenga 1 (Es un valor unico)
  return Number(
    Object.entries(map)
      .find(([k, v]) => v === 1)
      .at(0)
  );
}

console.log(singleNumber([2, 2, 1])); // Output: 1

console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4

console.log(singleNumber([1])); // Output: 1
