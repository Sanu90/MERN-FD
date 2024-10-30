function one() {
  let a = 1;
  //   console.log('b', b);

  function two() {
    let b = 2;
    console.log(a);

    function three() {
      console.log(a + b);
    }
    three();
  }
  two();
}
one();
