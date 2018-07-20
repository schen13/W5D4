Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function double(num) {
  return num * 2;
}

Array.prototype.myMap = function (func) {
  const mappedArray = [];
  this.myEach(element => mappedArray.push(func(element)));
  return mappedArray;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let arr = this;
  return_val = (!initialValue) ? arr.shift() : initialValue;
  arr.myEach(element => return_val = callback(return_val, element));
  return return_val;
};

function multiply(n1, n2) {
  return n1 * n2;
}

