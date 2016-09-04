function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
function groupBy(array, groupFunc){
  var map = {};
  array.forEach(function(element){
    var key = groupFunc(element);
    if(map[key] == undefined){
      map[key] = [];
    }
    map[key].push(element);
  });
  return map;
}

function century(person){
  return Math.ceil(person.died / 100);
}

function age(person){
  return person.died - person.born;
}

var ancestry = JSON.parse(ANCESTRY_FILE);
var allPersonsPerAge = groupBy(ancestry, century);
for (var data in allPersonsPerAge){
  var averageAge = average(allPersonsPerAge[data].map(age));
  var roundAge = Math.round(averageAge*10)/10;
  console.log(data + ":" + roundAge); 
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94