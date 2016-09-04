var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce(function(array, current){
  return array.concat(current);
}));
// → [1, 2, 3, 4, 5, 6]