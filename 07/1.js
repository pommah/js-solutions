// Your code here
function SmartPlantEater() {
	this.energy = 20;
}

SmartPlantEater.prototype.act = function(view) {
  var allSpaces = view.findAll(" ");
  this.space = allSpaces.includes(this.space)?this.space:randomElement(allSpaces);
  if (this.energy > 90 && this.space)
    return {type: "reproduce", direction: this.space};
  var plant = view.find("*");
  if (plant)
    return {type: "eat", direction: plant};
  if (this.space)
    return {type: "move", direction: this.space};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
