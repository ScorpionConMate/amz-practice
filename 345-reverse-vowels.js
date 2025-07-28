/**
 *
 * @param {string} str
 * @returns {string}
 */
function reverseVowels(s) {
  const isVowel = (vowel) => {
    return ["a", "e", "i", "o", "u"].includes(vowel.toLowerCase());
  };
  const str = s.split("");
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  while (leftPointer < rightPointer) {
    while (leftPointer < rightPointer && !isVowel(str[leftPointer])) {
      leftPointer++;
    }

    while (leftPointer < rightPointer && !isVowel(str[rightPointer])) {
      rightPointer--;
    }
    const temp = str[leftPointer];

    str[leftPointer] = str[rightPointer];
    str[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }

  return str.join("");
}

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes [A, e, e, I]
console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
