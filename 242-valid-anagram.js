/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram(s, t) {
  const normalize = (v) =>
    v.split("").sort().join() === t.split("").sort().join();

  return normalize(s) === normalize(t);
}

console.log(isAnagram("anagram", "nagaram"));
