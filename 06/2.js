function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  var innerWidth = this.inner.minWidth();
  var selfWidth = this.width;
  return Math.max(innerWidth, selfWidth);
};
StretchCell.prototype.minHeight = function() {
  var innerHeight = this.inner.minHeight();
  var selfHeight = this.height;
  return Math.max(innerHeight, selfHeight);
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]