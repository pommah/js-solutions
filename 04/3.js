function arrayToList(array){
  if(array.Length === 0){
    return undefined;
  }
  var node = {value: array[0],
                rest: null};
  var list = node;
  for(var i=1; i<array.length; i++){
    node.rest = {value: array[i],
                 rest: null};
    node = node.rest;
  }
  return list;
}

function listToArray(list){
  var array = [];
  var node = list;
  while (node != null){
    array.push(node.value);
    node = node.rest;
  }
  return array;
}

function prepend(value, list){
  return { value: value,
          rest: list};
}

function nth(list, index){
  if(index === 0){
    return list.value;
  }
  else if(list == undefined || list == null){
    return undefined;
  }
  else{
    return nth(list.rest, index - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20