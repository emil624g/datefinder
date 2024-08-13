require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

const enddate = require('./src/enddate.js');
const weekends = require('./src/onlyweekend.js');
const unavailabledates = require('./src/unavailabledates.js');

app.use(express.json());
app.set("views", path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (request, response) => {
    response.render('index');
});

app.post('/', async(request, response) => {

    const endDateValue = request.body.enddate;
    const weekend = request.body.weekend;
    const unavailableDates = request.body.unavailableDates;

    let dates = await enddate(endDateValue);
    dates = await weekends(dates, weekend);
    let availableDates = await unavailabledates(dates, unavailableDates);

    response.send(availableDates);
})

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup");
    console.log("Server listening on http://localhost:" + PORT + "\n");
})