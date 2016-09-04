// Your code here.
function Vector(x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other){
  return new Vector(this.x+other.x, this.y+other.y);
}

Vector.prototype.minus = function(other){
  return new Vector(this.x-other.x, this.y-other.y);
}

Object.defineProperty(Vector.prototype, "length",
                      {get: function(){
                        var x = this.x;
  						var y = this.y;
  						return Math.sqrt(x*x + y*y);
                      }});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5