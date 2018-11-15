 function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((a,b) => a - b).indexOf(num);  
}

console.log(getIndexToIns([2, 20, 10], 19));