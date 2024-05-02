const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(shape, color, characters, shapeColor){
        super(color);
        {
            this.shape = shape;
            this.color = color;
            this.characters = characters;
            this.shapeColor = shapeColor;
        }
    }
}
function renderSquare(square) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" x="10" y="10" fill="${square.shapeColor}" />
  
    <text x="110" y="130" font-size="70" text-anchor="middle" fill="${square.color}">${square.characters}</text>
  
  </svg>`
};

module.exports = {Square, renderSquare};
