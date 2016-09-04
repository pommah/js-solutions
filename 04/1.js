function range(from, to, step){
	var arr = [];
  	if (step === undefined || step === 0){
      step = 1;
    }
  	if(step > 0){
      for(var i=from; i<=to; i+=step){
      	arr.push(i);
    	}
    }else{
      for(var i=from; i>=to; i+=step){
      	arr.push(i);
    	}
    }
  return arr;
}

function sum(array){
  	var sum=0;
	for (var i=0; i<array.length; i++){
      sum += array[i];
    }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55