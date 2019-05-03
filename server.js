"use strict";
exports.__esModule = true;
var https_1 = require("./https");
var homecontroller_1 = require("./homecontroller");
var botcontroller_1 = require("./botcontroller");
var express = require("express");
var http = require("http");
var path = require("path");
var bodyparser = require("body-parser");
require('dotenv').config();
var app = express();
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(bodyparser.json());
var httpServer = http.createServer(app);
httpServer.listen(process.env.SERVER_PORT, function () {
    console.log("Server started on port " + process.env.SERVER_PORT.toString());
});
if (process.env.ENVIRONMENT == 'PRODUCTION') {
    var https = https_1.Https.getInstance(app, true);
    https.start();
}
var homecontroller = new homecontroller_1.HomeController();
app.get('/', homecontroller.index_GET);
var botcontroller = new botcontroller_1.BotController();
app.post('/bot/usersays', botcontroller.UserSays_POST);
