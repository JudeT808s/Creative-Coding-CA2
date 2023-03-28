let balls = []

class Ball {
    constructor(_x = random(0, 500), _y = random(0, 500)) {
        this.x = _x;
        this.y = _y;
    }
    draw() {
        circle(this.x, this.y, 5);
    }
    triangulate() {
        this.dist = []
        let shortestDist = []
        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                let distX = this.x - balls[j].x;
                let distY = this.y - balls[j].y;
                this.dist.push(sqrt((distX * distX) + (distY * distY)));
                // console.log(this.dist)
                // break
            
                shortestDist.push(this.dist.reduce((accum, dist) => {
                    if ((accum || 0) > dist) {
                        return dist
                    }
                    else {
                        return accum
                    }
                })
                )
            }
            console.log(shortestDist[i]);
        }
    }

}

function setup() {
    createCanvas(500, 500)
    background(0);
    for (let x = 0; x < 5; x++) {
        balls.push(new Ball())
    }
    // console.log(balls)

    // balls.forEach( num=> {
    //     console.log(balls[num])
    //    // balls[num].draw()
    // });
    balls.forEach((ball) => {
        ball.draw()
        ball.triangulate(ball.x, ball.y)
        // ball.triangulate(balls[ball].x,balls[ball].y)
    });
}
function draw() {


}