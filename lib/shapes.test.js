const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    test('should return a circle', () => {
        const circle = new Circle();
        var color = 'blue';
        circle.setColor(color);
        expect(circle.render()).toBe(`<circle> cx="50%" cy="50%" r="100" height = "100%" width = "100%" fill="${color}"/>`);
    });
});

describe('Square', () => {
    test('should return a square', () => {
        const square = new Square();
        var color = 'blue';
        square.setColor(color);
        expect(square.render()).toBe(`<rect x="0" y="0" width="100%" height="100%" fill="${color}"/>`);
    });
});

describe('Triangle', () => {
    test('should return a triangle', () => {
        const triangle = new Triangle();
        var color = 'blue';
        triangle.setColor(color);
        expect(triangle.render()).toBe(`<polygon points="50,0 0,100 100,100" fill="${color}"/>`);
    });
});
