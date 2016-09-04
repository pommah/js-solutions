function deepEqual(left, right){
  if (typeof left == "object"){
    if(typeof right == "object"){
      if(left != null && right != null){
        var properties = [];
        for(var property in left){
          properties.push(property);
        }
        for(var property in right){
          if(!properties.includes(property)){
            return false;
          }
        }
        var equal = true;
        for (var i=0; i<properties.length; i++){
          equal = equal && deepEqual(left[properties[i]],
                                    right[properties[i]]);
        }
        return equal;
      }
      else if (left == null && right == null){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  else{
    if(typeof right ==  "object"){
      return false;
  	}else{
      return left === right;
  	}
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true