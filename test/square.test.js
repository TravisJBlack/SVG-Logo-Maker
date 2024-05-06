const {Square} = require('../lib/square')

describe('square', () => {
    
    describe('shape', () => {
        it('should accept user input and return the shape they ask for out of the list', () =>{
            const shape  = new Square(
                'circle',
                'black',
                'UGK',
                'blue'
            )

expect(shape.render(shape)).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" fill="blue" />
        <text x="110" y="130" font-size="70" text-anchor="middle" fill="black">UGK</text>
        </svg>`
    );
        })
    })
})