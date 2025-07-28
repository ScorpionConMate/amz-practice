/**
 *
 * @param {string} s
 * @returns {number}
 */
function lengthOfLastWord(s) {
  return (
    // Return the length of last ocurrence
    s
      // Remove whitespaces
      .trim()
      // Split into spaces
      .split(" ")
      // Get last occurrence
      .at(-1).length
  );
}

console.log(lengthOfLastWord("Hello World")); // 5

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4

console.log(lengthOfLastWord("luffy is still joyboy")); // 6
