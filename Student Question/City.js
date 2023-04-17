class City {
    constructor({ city, lat, lng, country, population }) {
        this.city = city
        this.lat = +lat
        this.lng = +lng
        this.country = country
        this.population = +population
    }
    render() {
        fill(255);
        noStroke()
        let scaledLng = map(this.lng, minLng, maxLng, 100, 400);
        let scaledLat = map(this.lat, minLat, maxLat, 100, 400);
        textAlign(CENTER, CENTER)
        text(this.city, scaledLat, scaledLng -20)
        ellipse(scaledLat, scaledLng, 10)
    }
}