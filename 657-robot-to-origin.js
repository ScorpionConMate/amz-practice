/**
 *
 * @param {string} moves
 * @returns {boolean}
 */
function judgeCircle(moves) {
  const movesMap = {
    U: 1,
    D: -1,
    R: 1,
    L: -1,
  };
  // Representamos con X Y
  // X horizontal (LEFT RIGHT)
  // Y vertical (UP DOWN)
  const start = [0, 0];
  for (const move of moves) {
    if (move === "U" || move === "D") {
      start[0] = start[0] + movesMap[move];
    }
    if (move === "L" || move === "R") {
      start[1] = start[1] + movesMap[move];
    }
  }

  return start[0] === 0 && start[1] === 0;
}

console.log(judgeCircle("UD")); // true
console.log(judgeCircle("LL")); // false
