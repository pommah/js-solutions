function reverseArray(array){
  var newArray = [];
  for(var i=array.length-1; i>=0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  var length = array.length;
  for(var i=0; i<length/2; i++){
    var tmp = array[i];
    array[i] = array[length-i];
    array[length-i] = tmp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]