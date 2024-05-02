const Shapes = require('./shapes');


class Circle extends Shapes {
    constructor(shape, color, characters, shapeColor){
        super(color);
            this.shape = shape;
            this.color = color;
            this.characters = characters;
            this.shapeColor = shapeColor;
        
    }
}

function renderCircle(circle) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill='${circle.shapeColor}' />
  
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${circle.color}">${circle.characters}</text>
  
  </svg>`
};

module.exports = {Circle, renderCircle};
    
