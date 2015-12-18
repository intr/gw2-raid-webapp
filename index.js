var express = require('express'),
    helmet = require('helmet'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.post('/api/sendApp',function(req, res) {
    console.log(req.body);
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

if (config.port) {
    app.listen(config.port, function () {
        console.log("# Server ON")
    });
}
