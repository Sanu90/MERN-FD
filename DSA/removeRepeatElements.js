// remove the characters which is repeating more than 1, and return the non repeating characters 


let word='arabcrkk'; // bc

let newWord=''

let word2Array = word.split('')
//console.log(word.split(''))

for(let i=0;i<word2Array.length;i++){
  if(word2Array.indexOf(word2Array[i]) === word2Array.lastIndexOf(word2Array[i])){
  newWord+=word2Array[i];
}
}
console.log("newWord-->>>", newWord)