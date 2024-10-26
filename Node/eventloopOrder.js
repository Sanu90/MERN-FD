console.log(1);

setImmediate(() => console.log(2));

setTimeout(() => console.log(3), 10);
console.log(4);

process.nextTick(() => console.log(5));
console.log(6);

// synchronous functions first happen followed by asynchronous (process.nextTick,setTimeout,setImmediate)--> if no wait time is given for setTimeout
// If wait time is given, then SetImmediate happens first followed by setTimeout
