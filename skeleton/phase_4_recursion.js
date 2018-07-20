function range(start, end) {
  if (start == end) {
    return [end];
  }
  return [start].concat(range(start+1, end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + sumRec(arr);
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  
  if (exp === 1) {
    return base;
  }
  return base * exponent1(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  
  if (exp === 1) {
    return base;
  }
  if (exp % 2 == 1) {
    return base * exponent2(Math.pow(base, 2), (exp-1)/2);
  } else {
    return exponent2(Math.pow(base, 2), exp/2);
  }
}

function fibonacci(n) {
  if (n === 1 || n === 0) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }
  let prev_fib = fibonacci(n-1);
  prev_fib.push(prev_fib[prev_fib.length - 1] + prev_fib[prev_fib.length - 2]);
  return prev_fib;
}

function deepDup(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      copy.push(deepDup(arr[i]));
    } else {
      copy.push(arr[i]);
    }
  }
  return copy;
}

function bsearch(arr, target) {
  if (arr.length <= 1 && arr[0] != target)  {
    return -1;
  }
  let mid = Math.floor(arr.length/2);
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    
    val = bsearch(arr.slice(mid+1), target);
    return ((val < 0) ? val : val + mid + 1);
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left).concat(right);
}

function subsets(array) {
  if (array.length <= 1) {
    return [array];
  }
  let last_num = array.pop();
  let prev_subsets = subsets(array);
  let result = prev_subsets;
  for (let i = 0; i < prev_subsets.length; i++) {
    result.push(prev_subsets[i].push(last_num));
  }
  return result;
}