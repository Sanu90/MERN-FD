let person1 = {
  name: "Githin",
  print(profession) {
    console.log(`I am ${this.name}, a ${profession}`);
  },
};

let person2 = {
  name: "Kavya",
};

person1.print("doctor");

// call
person1.print.call(person2, "driver");
// apply
person1.print.apply(person2, ["peon"]);
// bind
let bindedValue = person1.print.bind(person2, "housewife");
bindedValue();
