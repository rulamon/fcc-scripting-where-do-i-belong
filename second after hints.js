 //.concat() instead of .push()
 function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a,b) => a - b).indexOf(num);  
};

console.log(getIndexToIns([2, 20, 10], 19));