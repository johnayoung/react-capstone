// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = fn => {
  const cache = {};
  return (...args) => {
    const n = args[0]; // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    }

    console.log("Calculating result");
    const result = fn(n);
    cache[n] = result;
    return result;
  };
};

const factorial = memoize(x => {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
});

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const memFib = memoize(n => {
  if (n < 2) {
    return n;
  }
  return memFib(n - 1) + memFib(n - 2);
});

console.log("regular fib");
console.log(fib(45));
console.log("memFib");
console.log(memFib(45));
