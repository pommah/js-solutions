// Your code here
function Tiger() {
	this.energy = 60;
}

Tiger.prototype.act = function(view) {
  var allSpaces = view.findAll(" ");
  this.space = allSpaces.includes(this.space)?this.space:randomElement(allSpaces);
  if (this.energy > 100 && this.space)
    return {type: "reproduce", direction: this.space};
  var prey = view.find("O");
  if (prey)
    return {type: "eat", direction: prey};
  if (this.space)
    return {type: "move", direction: this.space};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));
