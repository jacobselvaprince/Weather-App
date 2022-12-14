const express = require('express');
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));

const foreCast = require('./utility/forecast');
const geoCode = require('./utility/geoCode');


app.get('/api/weather', function(req, res){
    geoCode(req.query.city, function(lat, long){
        foreCast(lat, long, function(temp){
            res.status(200).send({
                temperature: temp
            })
        })
    })
})

app.get('/about', function (req, res) {
    res.render('about');
})

app.get('/help', function (req, res) {
    res.render('help');
})

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/reg', function (req, res) {
    res.send('register Page');
})

app.get('/', function (req, res) {
    res.send('Login Page');
})

app.listen(3000, function () {
    console.log("This server is Up on port 3000");
})
