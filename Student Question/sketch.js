let table;
let cities = [];
let arr = []
let filteredCities;
let avePop
let journeys = [];
let journeys2 = [];
let maxLat, minLat, maxLng, minLng;

function preload() {
    table = loadTable('cities.csv', 'csv', 'header')
}


// class Journey2 {
//     constructor(_fromCity, _fromLat, _fromLng, _tocity, _toLat, _toLng, _distance) {
//         this.fromCity = _fromCity
//         this.fromLat = _fromLat
//         this.fromLng = _fromLng
//         this.toCity = _tocity
//         this.toLat = _toLat
//         this.toLng = _toLng
//         this.distance = _distance
//     }
// }
// .rows[x].obj
function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
    for (let x = 0; x < table.getRowCount(); x++) {
        cities.push(new City(table.rows[x].obj))

    }
    console.log(cities)
    for (x = 0; x < cities.length; x++) {
        filteredCities = cities.filter(city => city['population'] > 14000)
    }
    console.log(filteredCities)

        avePop = round(filteredCities.reduce((accum, city) => {
            return (accum + (+city['population']))
        }, 0
        ) / filteredCities.length)
    
    console.log('The average population of the cities is ' + avePop + " people")


    maxLat = max(filteredCities.map(x => x['lat']))
    minLat = min(filteredCities.map(x => x['lat']))
    maxLng = max(filteredCities.map(x => x['lng']))
    minLng = min(filteredCities.map(x => x['lng']))
    filteredCities.map(max)
    console.log("The maximum latitude is " + maxLat + " and the minimum latitude is " + minLat)
    console.log("The maximum longitude is " + maxLng + " and the minimum longitude is " + minLng)

    for (i = 0; i < filteredCities.length; i++) {
        for (j = i + 1; j < filteredCities.length; j++) {
            journeys.push((new Journey(filteredCities[i], filteredCities[j])));
        }
    }
    console.log(journeys)
    console.log("The distance between " + journeys[3].fromCity + " and " + journeys[3].toCity + " is " + journeys[3].distance + " km");

    // for (let i = 0; i < filteredCities.length; i++) {
    //     for (let j = i + 1; j < filteredCities.length; j++) {
    //         fromCity = filteredCities[i];
    //         toCity = filteredCities[j];
    //         let distX = fromCity.lat - toCity.lat;
    //         let distY = fromCity.lng - toCity.lng;
    //          distance = Math.sqrt((distX * distX) + (distY * distY)) * 100;
    //         journeys2.push(new Journey2(fromCity.city, fromCity.lat, fromCity.lng, toCity.city, toCity.lat, toCity.lng, distance));
    //     }
    // }
    // console.log(journeys2[3]);
    // console.log(journeys2);
    // journeys[0].draw(journeys[0])
    console.log('test');
    // console.log(value)
    // for (let i = 0; i < journeys.length; i++) {
    //     //  value = (journeys.length / filteredCities.length) -i;

    //     // console.log(journeys[i].fromLat);
    //     for (let j = (45 / 8) -i; j < (45 / 8 )-i  ; j++) {
    //             console.log(j)
    //             fill(255);
    //             circle(journeys[0].fromLat, -journeys[0].fromLng, 10);
            
    //     }
    //     // journey.draw(journey)
    // };
}


  





function draw() {
    noLoop()
    background(0);

    
    filteredCities.forEach(city => city.render())
    // translate(0,-0)
    // push()
    // journeys.forEach(journey => journey.render(journeys.map(x => ({ lat: x.fromLat , lng: x.fromLng })), journeys.map(x => ({ lat: x.toLat , lng: x.toLng }))))  
    journeys.forEach(journey => journey.render() +
    journey.triangulate() + journey.shortestRoute())
}
  
   

