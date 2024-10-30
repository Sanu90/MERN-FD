function a(m) {
  return function b(n) {
    return function c(o) {
      return m + n + o;
    };
    c();
  };
  B();
}
console.log(a(1)(2)(3));

// also have a concept infinite currying
