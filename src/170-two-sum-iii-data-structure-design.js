/*
 * https://leetcode.com/problems/two-sum-iii-data-structure-design/
 *
 * 170. Two Sum III - Data structure design
 *
 * Design and implement a TwoSum class. It should support the following operations: add and find.
 *
 * add - Add the number to an internal data structure.
 * find - Find if there exists any pair of numbers which sum is equal to the value.
 *
 * For example,
 * add(1); add(3); add(5);
 * find(4) -> true
 * find(7) -> false
 *
 * Initialize your data structure here.
 *
 * var TwoSum = function() {
 *
 * };
 *
 * Add the number to an internal data structure.
 * @param {number} number
 * @return {void}
 *
 * TwoSum.prototype.add = function(number) {
 *
 * };
 *
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 *
 * TwoSum.prototype.find = function(value) {
 *
 * };
 *
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

var TwoSumFastWrite = function() {
  this.nums = {};
};

TwoSumFastWrite.createNew = function() {
  return new TwoSumFastWrite();
}

TwoSumFastWrite.prototype.add = function(number) {
  this.nums[number] = this.nums[number] ? this.nums[number] + 1 : 1;
};

TwoSumFastWrite.prototype.find = function(value) {
  var keys = Object.keys(this.nums);
  var result = false;

  for(var i = 0; i < keys.length; i ++) {
    var key = Number(keys[i]);

    if(this.nums[value - key] && value - key !== key || this.nums[value - key] == 2) {
      result = true;
      break;
    }
  }

  return result;
};






var TwoSumFastRead = function() {
  this.nums = {};
  this.sums = {};
};

TwoSumFastRead.createNew = function() {
  return new TwoSumFastRead();
}

TwoSumFastRead.prototype.add = function(number) {
  if(this.nums[number]) {
    this.sums[number * 2] = true;
  } else {
    var nums = Object.keys(this.nums);

    for(var i = 0; i < nums.length; i++) {
      this.sums[Number(nums[i]) + number] = true;
    }

    this.nums[number] = true;
  }
};

TwoSumFastRead.prototype.find = function(value) {
  return !!this.sums[value];
};

module.exports = {
  TwoSumFastWrite: TwoSumFastWrite,
  TwoSumFastRead: TwoSumFastRead
};
