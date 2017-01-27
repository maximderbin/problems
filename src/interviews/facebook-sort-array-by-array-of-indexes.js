/*
 * Sort array 1 by indexes from array 2 inplace
 * var arr1 = ['A', 'B', 'C', 'D'];
 * var arr2 = [2, 1, 3, 0];
 *
 * sort(arr1, arr2) //=> ['C', 'B', 'D', 'A']
 */

module.exports = function(arr1, arr2) {
  for (var i = 0; i < arr2.length; i++) {
    var cur = arr2[i];
    var tmp1 = arr1[i];
    var tmp2 = arr2[i];
    var iNewPosition = arr2.indexOf(i);

    arr1[i] = arr1[cur];
    arr1[cur] = tmp1;
    arr2[i] = arr2[iNewPosition];
    arr2[iNewPosition] = tmp2;
  }

  return arr1;
};
