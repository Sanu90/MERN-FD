let word = "full_domain";

// REVERSE A STRING USING RECURSION.

// function reverseString(word) {
//   if (word.length <= 1) {
//     return word;
//   }
//   return word[word.length-1]+reverseString(word.slice(0,word.length-1))
// }

// console.log(reverseString(word));

// REVERSE USING STACK METHOD

function reverseString(word) {
  if (word === "") {
    return "";
  }

  return reverseString(word.slice(1)) + word[0];
}

console.log(reverseString(word));
