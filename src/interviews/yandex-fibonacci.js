/*
 * fib(1) // => 1
 * fib(2) // => 1
 * fib(3) // => 2
 * fib(4) // => 3
 * fib(5) // => 5
 * fib(6) // => 8
 */

module.exports = function fib(n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};
