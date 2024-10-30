// let a=10;
// if(true){
//     a=20;
//     console.log('a1', a);
// }
//     console.log('a2', a);

// console.log(a);
// const a = 10;

// let a = 10;
// let a = 20;
// console.log(a);

// hello()
// function hello(){
//     console.log(10);
// }

// a();
// var a=function (){
//     console.log("hey");
// }

// for(var i=1;i<10;i++){
//   setTimeout(()=>{
//     console.log(i)
//   },1000*i);
// }

for (var i = 1; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  })(i);
}
