let word = "malayalam";

function palindrome(word) {
  if (word.length == 0) {
    return true;
  }

  if (word[0] != word[word.length - 1]) {
    return false;
  }
  return palindrome(word.slice(1,word.length-1))
}

console.log(palindrome(word));
