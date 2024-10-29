const flag=true;

const promise=new Promise((resolve,reject)=>{
  if(flag){
    resolve("Success");
  }else{
    reject("failed");
  }
})

// console.log(promise)

promise.then((data)=>{
  console.log("Data-->", data)
}).catch((err)=>console.log("Error-->", err))