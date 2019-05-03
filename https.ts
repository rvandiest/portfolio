import * as https from 'https'
import * as fs from 'fs'
import * as express from 'express';
import * as path from 'path'

export class Https {

    private app: express.Application;
    private server: https.Server;

    private constructor(app: express.Application, server: https.Server) {
        this.app = app;
        this.server = server;
    }

    static getInstance(app: express.Application, enforce: boolean): Https {
        app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

        const privateKey = fs.readFileSync('/etc/letsencrypt/live/robertvandiest.nl/privkey.pem', 'utf8');
        const certificate = fs.readFileSync('/etc/letsencrypt/live/robertvandiest.nl/cert.pem', 'utf8');
        const ca = fs.readFileSync('/etc/letsencrypt/live/robertvandiest.nl/chain.pem', 'utf8');

        const credentials = {
            key: privateKey,
            cert: certificate,
            ca: ca
        };

        if (enforce) {
            app.use(function (req, res, next) {
                if (req.secure) {
                    // request was via https, so do no special handling
                    next();
                } else {
                    // request was via http, so redirect to https
                    res.redirect('https://' + req.headers.host + req.url);
                }
            });
        }

        const server = https.createServer(credentials, app);
        return new Https(app, server)
    }

    public start() {
        this.server.listen(443, () => {
            console.log("https started")
        })
    }

}