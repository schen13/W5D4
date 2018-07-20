Array.prototype.bubbleSort = function() {
for(let i = 0; i < this.length; i++) {
  for(let j = 0; j < this.length; j++) {
    if (this[i] < this[j]) {
      [this[i], this[j]] = [this[j], this[i]];
    }
  }
}
return this;
};

String.prototype.substrings = function() {
return_substrings = [];
for(let i = 0; i < this.length; i++) {
  for(let j = i + 1; j <= this.length; j++) {
    substring = this.slice(i, j);
    if (!return_substrings.includes(substring)) {
      return_substrings.push(substring);
    }
  }
}
return return_substrings;
};
