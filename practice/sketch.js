let table 
let tidyTable = []

function preload() {
     table= loadTable('dataFiles/Emmigration Male.csv', 'csv', 'header')
}
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    for (x = 0; x < table.getRowCount(); x++) {
        tidyTable.push(table.rows[x].obj)
    }
    // console.log(tidyTable)
    let year = tidyTable.filter(x => x['Year'] == "1987").map(x => ({ Country: x['STATISTIC label']}));
}
    console.log(year)

   let stat = tidyTable.map(x => 
        x['STATISTIC Label'] && +x['VALUE']
    )
    console.log(stat)
}
function draw() {
    
}
