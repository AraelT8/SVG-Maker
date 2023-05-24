const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

class SVG{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setShapeColor(color){
        this.shapeColor = color;
    }
    setText(text,color){
        this.textElement = `<text x="50%" y="50%" fill="${color}" font-size="50" dominant-baseline="middle" text-anchor="middle">${text}</text>`;
    }
    setShape(shape){
        this.shapeElement = shape.render();
    }
}

const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters to display in the center of the SVG:',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Please enter a color for the text:',
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Please enter a color for the shape:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];


function writeSVG(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log('The file has been saved!');
    });
}

async function main(){
    const answers = await inquirer.prompt(prompts);
    const svg = new SVG();
    svg.setShapeColor(answers['shape-color']);
    svg.setText(answers.text, answers['text-color']);
    switch(answers.shape){
        case 'Circle':
            svg.setShape(new Circle());
            break;
        case 'Square':
            svg.setShape(new Square());
            break;
        case 'Triangle':
            svg.setShape(new Triangle());
            break;
    }
    const fileName = 'logo.svg';
    const data = svg.render();
    writeSVG(fileName, data);
}

main();

