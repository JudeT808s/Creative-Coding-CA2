this.distance = []
this.scales = []
class Journey {
    constructor(obj, obj2) {
        this.fromCity = obj['city']
        this.fromLat = +obj['lat']
        this.fromLng = +obj['lng']
        this.toCity = obj2['city']
        this.toLat = +obj2['lat']
        this.toLng = +obj2['lng']
        this.distance = this.getDistance()
    }
    getDistance() {
        this.distance = []
        for (let i = 0; i < journeys.length; i++) {
            let distX = this.fromLat - this.toLat;
            let distY = this.fromLng - this.toLat;
            this.distance.push(sqrt((distX * distX) + (distY * distY) * 100));
            return this.distance[i];
        }
    }
    render() {
        // console.log(this.fromLat)
        // console.log(this.toLat)
        stroke(255);
        this.scfromLng = -map(-this.fromLng, -minLng, -maxLng, 100, 400);
        this.sctoLng = -map(-this.toLng, -minLng, -maxLng, 100, 400);
        this.scfromLat = map(this.fromLat, minLat, maxLat, 100, 400);
        this.sctoLat = map(this.toLat, minLat, maxLat, 100, 400);
        // this.scfromLng = map(this.fromLng, minLng, maxLng, 100, 400);
        // this.sctoLng = map(this.toLng, minLng, maxLng, 100, 400);
        // this.scfromLat = -map(-this.fromLat, -minLat, -maxLat, 100, 400);
        // this.sctoLat = -map(-this.toLat, -minLat, -maxLat, 100, 400);

        line( this.scfromLat, -this.scfromLng,  this.sctoLat, -this.sctoLng);
    }
    triangulate() {
        this.distX = (this.scfromLat - this.sctoLat)
        this.distY = (-this.scfromLng + this.sctoLng);
        this.length = sqrt((this.distX * this.distX) + (this.distY * this.distY));
        let midpointX = (this.scfromLat + this.sctoLat) / 2;
        let midpointY = -(+this.scfromLat + this.sctoLat) / 2;
        this.angle = atan2((this.distY/2), (this.distX/2));
       
        // this.scX = map(midpointX, minLat, maxLat, 100, 400);
        // this.scY = -map(midpointY, minLng, maxLng, 100, 400);
        // console.log(midpointX)
        // console.log(this.angle)
        push()
        noStroke()
        // console.log(midpointX)
        translate(midpointX, -midpointY);
        rotate(this.angle);
        text(this.length, 0, -10)
        pop()
        //  console.log(halfX)
         //console.log(halfX)
        // console.log(halfY)
    }
    shortestRoute() {
        this.counter = 0;
        this.counter2 = 0;
        this.length = [];
        this.start = [journeys[0]]; // Initialize this.start with the first journey
        for (let i = 0; i < journeys.length; i++) {
            if (!journeys.find((journey) => journey === this.start)) {
                for (let j = i + 1; j < journeys.length; j++) {
                    this.counter2 = j;
    
                    this.distX = this.start[i].fromLat - journeys[j].fromLat; // Correctly access fromLat
                    this.distY = this.start[i].fromLng - journeys[j].fromLng; // Correctly access fromLng
                    this.length.push(Math.sqrt(this.distX * this.distX + this.distY * this.distY));
                    for (let k = j + 1; k < this.length.length; k++) {
                        if (this.length[this.counter] > this.length[k]) { // Correctly compare distances
                            this.counter = k; // Update counter
                        }
                    }
    
                }
            }
            this.start.push(journeys[this.counter]); // Update this.start with the shortest journey
        }
        // Decide what you want to return as the result, such as the shortest route or the updated this.start array
        console.log(this.start);
    }
    
        // shortestRoute() {
    //     this.counter = 0;
    //     this.length = []
    //     this.start.push(journeys[0]);
    //     for (let i = 0; i < journeys.length; i++){
    //         // console.log(this.start)
    //         for (let j = i+1; j < journeys.length; j++) {
    //             this.distX = (this.start.fromLat - this.fromLat[j])
    //             this.distY = (this.start.fromLng + this.fromLng[j]);
    //             this.length.push(sqrt((this.distX * this.distX) + (this.distY * this.distY)));
    //             for (let k = j+1; k < this.length.length; k++) {
    //                 if (this.length[j] < this.length[k]) {
    //                      this.length[j] = this.length[k];
    //                     this.counter =k
    //                 }
    //             }

    //             // let shortest = Math.min(this.length);
    //             // console.log(shortest)
    //         }
    //         this.start.push(journeys[this.counter]);

    //         // console.log(this.start);

    //         //Now that the shortest route is found we have to change this.start
    //         //to the next town
    //     }
    // }
    // for(let l = 0; l> this.start; l++) {
    
    // }
}
