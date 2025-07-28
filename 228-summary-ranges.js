/**
 *
 * @param {number[]} nums
 * @returns {string[]}
 */
function summaryRanges(nums) {
  if (nums.length === 0) return [];
  const ranges = [];
  let start = nums[0];
  let end = nums[0];

  // El indice se inicializa en 1, porque ya cubrimos la posicion 0 del array con start y end
  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    // Si el elemento actual es igual a end+1 (nums[0]) actualizamos el valor de end al del indice
    // Esto nos dice si el numero es consecutivo o no
    if (element === end + 1) end = nums[index];
    else {
      // Si start tiene el mismo valor que end, entonces mantenemos el valor de start
      // Sino, agregamos el rango
      ranges.push(start === end ? `${start}` : `${start}->${end}`);
      // Reiniciamos el valor de start al valor actual
      start = element;
      end = element;
    }
  }
  // last range
  ranges.push(start === end ? `${start}` : `${start}->${end}`);

  return ranges;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2","4->5","7"]
/* Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7" */

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0","2->4","6","8->9"]
/* Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9" */
