let obj = {
  name: "faisal",
  age: 33,
  married: true,
  address: {
    houseName: "plakili",
    town: "nalleppili",
    taluk: "chittur",
    district: "palakkad",
    state: "kerala",
    pin: 767887,
  },
  language: ["malayalam", "english", "urdu", "tamil"],
  job: "bank",
};
let lengthofObj = Object.keys(obj).length;
console.log(lengthofObj);

let toDelete = Math.floor(lengthofObj / 2);
console.log(toDelete);

const middleKey = Object.keys[toDelete];
delete obj[middleKey];

console.log(obj);
