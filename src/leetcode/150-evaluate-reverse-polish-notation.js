/*
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * 150. Evaluate Reverse Polish Notation
 *
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 *
 * Some examples:
 *   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 *   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 *
 * @param {string[]} tokens
 * @return {number}
 *
 * var evalRPN = function(tokens) {
 *
 * };
 */

module.exports = function(tokens) {
  var stack = [];

  for (var i = 0; i < tokens.length; i++) {
    var cur = tokens[i];

    if (!+cur) {
      var a = stack.pop();
      var b = stack.pop();

      switch(cur) {
        case '+':
          stack.push(b + a);
          break;
        case '-':
          stack.push(b - a);
          break;
        case '*':
          stack.push(b * a);
          break;
        case '/':
          stack.push(b / a);
          break;
      }
    } else {
      stack.push(+cur);
    }
  }

  return stack[0];
};
