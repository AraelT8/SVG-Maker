class Shape{
constructor(){
    this.color = '';
}
setColor(color){
    this.color = color;
}
}

class Circle extends Shape{
    render(){
        return `<circle> cx="50%" cy="50%" r="100" height = "100%" width = "100%" fill="${this.color}"/>`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="0" y="0" width="100%" height="100%" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}"/>`;
    }
}
 module.exports = {Circle, Square, Triangle};