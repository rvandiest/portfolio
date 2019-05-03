"use strict";
exports.__esModule = true;
var https = require("https");
var fs = require("fs");
var express = require("express");
var path = require("path");
var Https = /** @class */ (function () {
    function Https(app, server) {
        this.app = app;
        this.server = server;
    }
    Https.getInstance = function (app, enforce) {
        app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));
        var privateKey = fs.readFileSync('/etc/letsencrypt/live/robertvandiest.nl/privkey.pem', 'utf8');
        var certificate = fs.readFileSync('/etc/letsencrypt/live/robertvandiest.nl/cert.pem', 'utf8');
        var ca = fs.readFileSync('/etc/letsencrypt/live/robertvandiest.nl/chain.pem', 'utf8');
        var credentials = {
            key: privateKey,
            cert: certificate,
            ca: ca
        };
        if (enforce) {
            app.use(function (req, res, next) {
                if (req.secure) {
                    // request was via https, so do no special handling
                    next();
                }
                else {
                    // request was via http, so redirect to https
                    res.redirect('https://' + req.headers.host + req.url);
                }
            });
        }
        var server = https.createServer(credentials, app);
        return new Https(app, server);
    };
    Https.prototype.start = function () {
        this.server.listen(443, function () {
            console.log("https started");
        });
    };
    return Https;
}());
exports.Https = Https;
