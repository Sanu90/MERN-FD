// let word = "malayalam";

// function palindrome(word) {
//   if (word.length == 0) {
//     return true;
//   }

//   if (word[0] != word[word.length - 1]) {
//     return false;
//   }
//   return palindrome(word.slice(1,word.length-1))
// }

// console.log(palindrome(word));

let word = "sundayadnus";

function stringPalindrome(word, left, right) {
  if (word[left] != word[right]) {
    return `not palindrome`;
  }
  if (word[left] >= word[right]) {
    return "palindrome";
  }

  return stringPalindrome(word, left + 1, right - 1);
}

console.log(stringPalindrome(word, 0, word.length - 1));
