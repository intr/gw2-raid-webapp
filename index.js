var express = require('express'),
    helmet = require('helmet'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('./config'),
    Datastore = require('nedb'),
    favicon = require('serve-favicon');;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public/build'));
app.use(favicon(__dirname + '/public/favicon.ico'));

db = new Datastore({ filename: __dirname + '/db.json', autoload: true });

app.post('/api/sendApp',function(req, res) {
    console.log(req.body);
    console.log(req.ip);
    req.body.ip = req.ip;
    db.insert(req.body);
    res.sendFile(path.join(__dirname + "/public/success.html"));
})

app.get("*", function (req, res) {
    console.log(req.baseUrl);
    db.findOne({ ip: req.ip }, function (err, doc) {
        console.log(doc);
        if (doc == null) {
            console.log("null")
            res.sendFile(path.join(__dirname + "/public/index.html"));
        } else {
            console.log("should redirect")
            res.sendFile(path.join(__dirname + "/public/success.html"));
        }
    });
});

if (config.port) {
    app.listen(config.port, function () {
        console.log("# Server ON");
    });
}
