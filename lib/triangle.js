const Shapes = require('./shapes');

class Triangle extends Shapes {
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

function renderTriangle(triangle) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" />
  
    <text x="155" y="150" font-size="50" text-anchor="middle" fill="${triangle.color}">${triangle.characters}</text>
  
  </svg>`
};

module.exports = {Triangle, renderTriangle};