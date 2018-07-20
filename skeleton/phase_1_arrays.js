Array.prototype.uniq = function() {
  const return_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (return_arr.includes(this[i])) {
      continue;
    }
    return_arr.push(this[i]);
  }
  return return_arr;
};

Array.prototype.twoSum = function() {
  const pos = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pos.push([i,j]);
      }
    }
  }
  return pos;
};

Array.prototype.transpose = function() {
  const trans = [];
  for (var i = 0; i < this.length; i++) {
    let inner_arr = [];
    for (var j = 0; j < this[i].length; j++) {
      inner_arr.push(this[j][i]);
    }
    trans.push(inner_arr);
  }
  console.log(JSON.stringify(trans));
  return trans;
  
};