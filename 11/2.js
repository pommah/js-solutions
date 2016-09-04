// This is the old skipSpace. Modify it...
function skipSpace(string) {
  var first = string.replace(/(\s|(#.*\n))*/, "");
  return first;
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
