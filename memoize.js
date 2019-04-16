'use strict';

// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // just taking one argument here
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

function fib(n) {
  if (n < 2){
    return n;
  }
  return fib(n - 1) + fib (n - 2);
}

console.log(fib(50));