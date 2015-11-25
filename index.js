var express = require('express'),
    helmet = require('helmet'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));

if (config.port) {
    app.listen(config.port, function () {
        console.log("# Server ON")
    });
}
