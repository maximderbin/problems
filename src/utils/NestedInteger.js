module.exports = function(val) {
  this.val = val;

  this.isInteger = function() {
    return this.val === parseInt(this.val, 10);
  };

  this.getInteger = function() {
    return this.val;
  };

  this.getList = function() {
    return this.val;
  };
};
