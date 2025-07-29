/**
 *
 * @param {number[][]} grid
 * @returns {number}
 */
function islandPerimeter(grid) {
  let perimeter = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let itemRow = 0; itemRow < rows; itemRow++) {
    for (let itemCol = 0; itemCol < cols; itemCol++) {
      if (grid[itemRow][itemCol] === 1) {
        perimeter += 4;
        // Revisa si tiene un vecino arriba
        if (itemRow > 0 && grid[itemRow - 1][itemCol] === 1) perimeter -= 2; // Resta 2 para los lados compartidos arriba/abajo
        // Revisamos a la izquierda
        if (itemCol > 0 && grid[itemRow][itemCol - 1] === 1) perimeter -= 2; // Resta 2 para los lados compartidos izq/der
      }
    }
  }
  return perimeter;
}

// Explanation: The perimeter is the 16 yellow stripes in the image above.
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // Output: 16

console.log(islandPerimeter([[1]])); // Output: 4

console.log(islandPerimeter([[1, 0]])); // Output: 4
