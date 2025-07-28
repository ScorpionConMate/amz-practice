/**
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOne(digits) {
  // Recorremos el array al reves
  for (let index = digits.length - 1; index >= 0; index--) {
    // Si (digits[index] < 9), entonces podemos sumar 1 y retornamos directamente el array
    // Ya que no hace falta modificarlo
    if (digits[index] < 9) {
      digits[index]++;
      return digits;
    } else {
      // Caso contrario, actualizamos el valor a 0, que es nuestra suma maxima solo sumando 1
      digits[index] = 0;
    }
  }
  // Para los casos de [9], [9,9], [9,9,9] etc.
  // Agregamos el 1 al inicio del array, ya que estos nuevos valores son
  // [0], [0,0], [0,0,0]
  digits.unshift(1);
  return digits;
}

console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4];
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2];
console.log(plusOne([9])); // Output: [1, 0];
console.log(plusOne([9, 9])); // Output [1,0,0]
