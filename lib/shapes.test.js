// Tests for shapes.js
const {Circle, Square, Triangle} = require('./shapes');
// test each shape class to make sure it returns the correct SVG markup
describe('Circle', () => {
    test('should return a circle', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toBe(`<circle cx="50%" cy="50%" r="100" height= "100%" width= "100%" fill="blue"/>`);
    });
});

describe('Square', () => {
    test('should return a square', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toBe(`<rect x="50" width="200" height="200" fill="blue"/>`);
    });
});

describe('Triangle', () => {
    test('should return a triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe(`<polygon points="50,0 0,100 100,100" fill="blue"/>`);
    });
});
