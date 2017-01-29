/*
 * fib(1) // => 1
 * fib(2) // => 1
 * fib(3) // => 2
 * fib(4) // => 3
 * fib(5) // => 5
 * fib(6) // => 8
 */

function fibNaive(n) {
  return n <= 2 ? 1 : fibNaive(n - 1) + fibNaive(n - 2);
};

memo = {};
function fibDP(n) {
  var result;

  if (memo[n]) {
    return memo[n];
  } else if (n <= 2) {
    result = 1;
  } else {
    result = fibDP(n - 1) + fibDP(n - 2)
  }

  memo[n] = result;

  return result;
};

function fibDPBottomUp(n) {
  var fib = {};

  for (var k = 1; k <= n; k++) {
    var result;

    if (k <= 2) {
      result = 1;
    } else {
      result = fib[k - 1] + fib[k - 2];
    }

    fib[k] = result;
  }

  return fib[n];
}

module.exports = {
  fibNaive: fibNaive,
  fibDP: fibDP,
  fibDPBottomUp: fibDPBottomUp
};
