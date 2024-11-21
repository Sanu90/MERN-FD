// https://jsonplaceholder.typicode.com/users/

// PROMISE.THEN

// const number = 11;
// const promise = new Promise((resolve, reject) => {
//   console.log("It started");

//   if (number > 5) {
//     setTimeout(() => {
//       resolve("This is resolved");
//     }, 0);
//   } else {
//     reject("This is rejected. Sorry");
//   }
//   console.log("It ended");
// });

// promise
//   .then((data) => {
//     console.log("output is->", data);
//   })
//   .catch((err) => {
//     console.log("Error happened->", err);
//   });

//---------------------------------------------------------------

// ASYNC-AWAIT

async function dataFetch() {
  try {
    //throw new Error("Nadakkila");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/2`
    );

    if (response.status != 200) {
      throw new Error("Error anu mone");
    }
    // console.log("response-->", response);

    const data = await response.json();
    console.log("data is-->", data);
  } catch (err) {
    console.log("error happened", err);
  }
}

dataFetch();
