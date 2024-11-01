// const flag=true;

// const promise=new Promise((resolve,reject)=>{
//   if(flag){
//     resolve("Success");
//   }else{
//     reject("failed");
//   }
// })

// // console.log(promise)

// promise.then((data)=>{
//   console.log("Data-->", data)
// }).catch((err)=>console.log("Error-->", err))

let promise = new Promise((resolve, reject) => {
  if (false) {
    resolve("Success");
  } else {
    reject("failed");
  }
});

promise
  .then((data) => {
    setTimeout(() => {
      console.log("data-->", data);
    }, 3000);
  })
  .catch((err) => {
    console.log("Error-->", err);
  });
