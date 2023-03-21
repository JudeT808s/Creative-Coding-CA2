let luasTidy = []
function preload() {
    //my table is comma separated value "csv"
    //and has a header specifying the columns labels
    luas = loadTable('DataFiles/LUAS_Flow.csv', 'csv', 'header');
    //the file can be remote
    //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
    //                  "csv", "header");
}
function setup() {
    let officers =
        [
            { id: "20", name: 'Captain Piett' },
            { id: "24", name: 'General Veers' },
            { id: "56", name: 'Admiral Ozzel' },
            { id: "88", name: 'Commander Jerjerrod' }
        ];
    //Map ids from officer table
    // officerId = officers.map(x => x.id)
    // console.log(officerId)
    //+ Converts to int
    let newTable = officers.map(officer => +(officer.id))
    console.log(newTable)
    let pilots =
        [
            {
                id: 10,
                name: "Poe Dameron",
                years: 14,
            },
            {
                id: 2,
                name: "Temmin 'Snap' Wexley",
                years: 30,
            },
            {
                id: 41,
                name: "Tallissan Lintra",
                years: 16,
            },
            {
                id: 99,
                name: "Ello Asty",
                years: 22,
            }
        ];
    //Total years of experience
    let totalYears = pilots.reduce((accum, x) => {
        return accum + x.years
    }, 0)
    console.log("Total years " + totalYears)
    //Oldest Pilot
    let oldest = pilots.reduce(
        (accum, x) => { return (accum.years || 0) > x.years? accum.years:x}, pilots[0])
    console.log(oldest)
    let factions = [
        {
            id: 2,
            name: "Wedge Antilles",
            faction: "Rebels",
        },
        {
            id: 8,
            name: "Ciena Ree",
            faction: "Empire",
        },
        {
            id: 40,
            name: "Iden Versio",
            faction: "Empire",
        },
        {
            id: 66,
            name: "Thane Kyrell",
            faction: "Rebels",
        }
    ];
    let Rebel = factions.filter(x => x.faction == "Rebels").map(x => x.name)
    console.log(Rebel)
    let Emperial = factions.filter(x => x.faction == "Empire").map(x => x.name)
    console.log(Emperial)

    for (let x = 0; x < luas.getRowCount(); x++) {
        luasTidy.push(luas.rows[x].obj)
    }
    //console.log(luasTidy)
    //Filters data from Statistic Label to only Red Line and only sends days of week and the value
    let redLine = luasTidy.filter(x => x['Statistic Label'] == "Average Red Line Flow" && x["Year"] == "2018").map(x => ({
        //Turns mapped data into object which assigns mapped data to name value pairs
        Day: x["Days of Week"], Value: +x["VALUE"]
    }))
    //Return and 0 is essential takes Value from name pair above and adds accumulator (last num)
    let totalPassengers2018 = redLine.reduce((accum, x) => { return accum + x.Value },0)
    console.log(redLine)
    console.log("Total passengers in 2018 " + totalPassengers2018)
}
function draw() {

}
