const enddate = require('./src/enddate.js');
const weekends = require('./src/onlyweekend.js');
const unavailabledates = require('./src/unavailabledates.js');

async function main() {

    let dates = await enddate();
    dates = await weekends(dates);
    let availableDates = await unavailabledates(dates);

    console.log("Available Dates:", availableDates);
}

main();