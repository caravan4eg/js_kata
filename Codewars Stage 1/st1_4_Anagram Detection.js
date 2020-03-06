// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
function isAnagram(test, original){
  return original.toLowerCase().split('').sort().join('') == test.toLowerCase().split('').sort().join('');

}

console.log(isAnagram('NAP', 'pan'))
// }
// var isAnagram = function(test, original) {
// };
