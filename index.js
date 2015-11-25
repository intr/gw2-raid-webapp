var express = require('express'),
    helmet = require('helmet'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config');

var app = express();

if (config.port) {
    app.listen(config.port, function () {
        console.log("# Server ON")
    });
}
