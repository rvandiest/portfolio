"use strict";
exports.__esModule = true;
var path = require("path");
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.index_GET = function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    };
    return HomeController;
}());
exports.HomeController = HomeController;
