function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  var result;
  while(result === undefined){
    try{
     result = primitiveMultiply(a,b); 
    }
    catch(ignored){}
  }
  return result;
}

console.log(reliableMultiply(8, 8));
// → 64