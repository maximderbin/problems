/*
 * https://leetcode.com/problems/merge-intervals/
 *
 * 56. Merge Intervals
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * For example,
 *   Given [1,3],[2,6],[8,10],[15,18],
 *   return [1,6],[8,10],[15,18].
 *
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 *
 * @param {Interval[]} intervals
 * @return {Interval[]}
 *
 * var merge = function(intervals) {
 *
 * };
 */

module.exports = function(intervals) {
  var intervals = intervals.sort(function(a, b) { return a.start - b.start });
  var result = [];

  for (var i = 0; i < intervals.length; i++) {
    var cur = intervals[i];
    var prev = result[result.length - 1];

    if (prev && cur.start <= prev.end) {
      prev.end = Math.max(prev.end, cur.end);
    } else {
      result.push(cur);
    }
  }

  return result;
};
