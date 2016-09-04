specialForms["set"] = function(args, env) {
  // Your code here.
  if (args.length != 2 || args[0].type != "word")
    throw new SyntaxError("Bad use of set");
  
  var scope = env;
  var name = args[0].name;
  var value = evaluate(args[1], env);
  do{
    if (Object.prototype.hasOwnProperty.call(scope, name)) {
      scope[name] = value;
      return value;
    }
  }
  while(scope = Object.getPrototypeOf(scope));  
  throw new ReferenceError("No such variable: " + name);
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
