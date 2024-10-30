function* counter(i) {
  yield i + 1;
  yield i * 2;
  yield i / 10;
}

const c = counter(1);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
