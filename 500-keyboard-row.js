/**
 *
 * @param {string[]} words
 * @returns {string[]}
 */
function findWords(words) {
  const rowMap = {};
  for (const c of "qwertyuiop") rowMap[c] = 1;
  for (const c of "asdfghjkl") rowMap[c] = 2;
  for (const c of "zxcvbnm") rowMap[c] = 3;
  return words.filter((word) => {
    // Convertimos la palabra a lower, la convertimos a un string
    const lowercase = word.toLowerCase().split("");
    // Encontramos la fila a la que pertenece la primer letra
    const row = rowMap[lowercase[0]];
    // Validamos que todas las letras esten en la misma fila
    return lowercase.every((char) => rowMap[char] === row);
  });
}

// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // Output: ["Alaska","Dad"]

console.log(findWords(["omk"])); // Output: []

console.log(findWords(["adsdf", "sfd"])); // Output: ["adsdf","sfd"]
