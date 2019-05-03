import { Https } from './https';
import { HomeController } from './homecontroller';
import { BotController } from './botcontroller';
import * as express from 'express';
import * as http from 'http'

import * as path from 'path';
import * as bodyparser from 'body-parser'

require('dotenv').config();

const app: express.Application = express();

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(bodyparser.json())

const httpServer = http.createServer(app)
httpServer.listen(process.env.SERVER_PORT, function () {
    console.log("Server started on port " + process.env.SERVER_PORT.toString());
});

if (process.env.ENVIRONMENT == 'PRODUCTION') {
    const https = Https.getInstance(app, true)
    https.start()
}
const homecontroller: HomeController = new HomeController()
app.get('/', homecontroller.index_GET)

const botcontroller: BotController = new BotController()
app.post('/bot/usersays', botcontroller.UserSays_POST)