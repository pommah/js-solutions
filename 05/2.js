function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var ancestry = JSON.parse(ANCESTRY_FILE);
var diffs = [];
ancestry.forEach(function(person){
  var mother = byName[person.mother];
  if (mother != undefined){
    diffs.push(person.born - mother.born);
  }});
console.log(average(diffs));
// → 31.2