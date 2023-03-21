class Person {
    constructor() {
        this.name = names[floor(random(0, 3))];
        this.age = int(random(20, 70));
        this.posX = int(random(0,canvasWidth))
        this.posY = int(random(canvasHeight,0))
    }
    render() {
        ellipse(this.posX,this.posY,5,5)
    }
}