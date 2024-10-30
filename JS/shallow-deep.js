// SHALLOW COPY

// const person={
//   name:'girish',
//   age:22,
//   address:{
//     houseName:'giriNilayam',
//     city:'bangalore'
//   }
// }

// const shallowPerson = {...person}
// shallowPerson.age=33;
// shallowPerson.address.city='kochi'

// console.log(shallowPerson);
// console.log(person)

// DEEP COPY

const person = {
  name: "Alex",
  age: 30,
  address: {
    city: "mettupaalayam",
    postcode: 478220,
  },
};

//shallow copy

// const newPerson = { ...person };
// newPerson.address.city = "coorg";

// console.log(person);
// console.log(newPerson);

//deep copy

const newPerson = JSON.parse(JSON.stringify(person));
newPerson.address.city = "coorg";

console.log(person);
console.log(newPerson);