const inquirer = require('inquirer');
const {Circle} = require('./lib/circle')
const {Square} = require('./lib/square')
const {Triangle} = require('./lib/triangle')
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
            message: 'What color should the svg be (must be a vailid color or a hexadecimal)?'
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
        fs.writeFile('./assets/logo.svg', newCircle.render(newCircle), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
    } else if (answers.svgShape === 'square'){
        const newSquare = new Square(
            answers.svgShape,
            answers.textColor,
            answers.characters,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', newSquare.render(newSquare), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
    } else if(answers.svgShape === 'triangle'){
        const newTriangle = new Triangle(
            answers.svgShape,
            answers.textColor,
            answers.characters,
            answers.shapeColor,
        )
        fs.writeFile('./assets/logo.svg', newTriangle.render(newTriangle), (err) => {
            err ? console.error(err) : console.log('Generated logo.svg');
          });
    } else {
        console.log('opps something wrong');
    }
    console.log(answers);
    
})



