// Your code here.
function Sequence(object){
  this.object = object;
  this.index = -1;
}

Object.defineProperty(Sequence.prototype,"moveNext",
                      {get: function(){
	return this.object.length > (++this.index);}});

Object.defineProperty(Sequence.prototype,"current",
                      {get: function(){
	return this.object[this.index];}});

function logFive(sequence){
  var index = 0;
  while(sequence.moveNext && index < 5){
    console.log(sequence.current);
    index++;
  }
}

function ArraySeq(array){
  Sequence.call(this, array);
}

ArraySeq.prototype = Object.create(Sequence.prototype);

function RangeSeq(from, to){
  this.value = from - 1;
  this.to = to;
}

Object.defineProperty(RangeSeq.prototype, "moveNext",
                      {get: function(){
                        return (++this.value) <= this.to;
                      }});

Object.defineProperty(RangeSeq.prototype, "current",
                      {get: function(){
                        return this.value;}});

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104