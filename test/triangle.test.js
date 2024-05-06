const {Triangle} = require('../lib/triangle')

describe('triangle', () => {
    
    describe('shape', () => {
        it('should accept user input and return the shape they ask for out of the list', () =>{
            const shape  = new Triangle(
                'triangle',
                'black',
                'UGK',
                'blue'
            )

expect(shape.render(shape)).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="155" y="150" font-size="50" text-anchor="middle" fill="black">UGK</text>
        </svg>`);
        })
    })
})