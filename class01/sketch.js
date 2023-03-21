
ages=[]
function setup() {
    createCanvas(canvasHeight,canvasWidth)
    for (let x = 0; x < 100; x++){
        people.push(new Person())
        
    }
    let ages = people.map(people => people.age)
        console.log(ages)
}

function draw() {
    for (let x = 0; x < people.length; x++) {
        people[x].render( )
    }
}