const inquirer = require('inquirer');
const {Circle, renderCircle} = require('./lib/circle')
const {Square, renderSquare} = require('./lib/square')
const {Triangle, renderTriangle} = require('./lib/triangle')
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'characters',
            message: 'What text should go inside of the svg (at most 3 characters)?',
            validate: function(answer) {
                if(answer.length > 3){
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be (must be a vailid color or a hexadecimal)?'
        },
        {
            type: 'list',
            name: 'svgShape',
            message: 'What shape should the logo be?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the svg be?'
        }
    ]
)
.then((answers) => {
    if(answers.svgShape === 'circle' ){
        const newCircle = new Circle(
            answers.svgShape,
            answers.textColor,
            answers.characters,
            answers.shapeColor,
        )
        console.log(newCircle.textColor);
        fs.writeFile('./assets/logo.svg', renderCircle(newCircle), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
        console.log(newCircle);
    } else if (answers.svgShape === 'square'){
        const newSquare = new Square(
            answers.svgShape,
            answers.textColor,
            answers.characters,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', renderSquare(newSquare), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
        console.log(newSquare);
    } else if(answers.svgShape === 'triangle'){
        const newTriangle = new Triangle(
            answers.svgShape,
            answers.textColor,
            answers.characters,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', renderTriangle(newTriangle), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
        console.log(newTriangle);
    } else {
        console.log('opps something wrong');
    }
    console.log(answers);
    
})



