let array=[1,2,3,4,12];
let sum=0;

function sumArray(array,sum){
  if(array.length==0){
    return sum;
  }
  
  return array.shift() + sumArray(array,sum);
}

console.log(sumArray(array,sum))