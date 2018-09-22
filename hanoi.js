const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




class Game {
   constructor(name) {
     this.name = name;
     this.towers = [[3, 2, 1], [], []];
   }
 }

Game.prototype.promptMove = function() {
  reader.question('From tower to tower?', function (res) {
    const from_tower = parseInt(res[0]);
    const to_tower = parseInt(res.slice(-1)[0]);
    //do we need the this?

    this.moveDisc(from_tower, to_tower);
  });
};

Game.prototype.moveDisc = function(from_tower, to_tower) {
  to_tower.push(this.towers[from_tower].pop);
};





Game.prototype.run = function() {

};
