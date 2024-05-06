const {Circle} = require('../lib/circle')

describe('circle', () => {
    
    describe('shape', () => {
        it('should accept user input and return the shape they ask for out of the list', () =>{
            const shape  = new Circle(
                'circle',
                'black',
                'UGK',
                'blue'
            )

expect(shape.render(shape)).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill='blue' />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="black">UGK</text>
        </svg>`
    );
        })
    })
})