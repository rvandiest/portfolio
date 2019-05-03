import { Request, Response } from "express";
import * as path from 'path'

const dialogflow = require('dialogflow');
const uuid = require('uuid');

async function runSample() {

}

export class BotController {
    public async UserSays_POST(req: Request, res: Response) {
        // A unique identifier for the given session
        const sessionId = uuid.v4();

        // Create a new session
        const sessionClient = new dialogflow.SessionsClient();
        const sessionPath = sessionClient.sessionPath(process.env.DIALOGFLOW_PROJECT_ID, sessionId);

        // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: req.body.message,
                    // The language used by the client (en-US)
                    languageCode: 'en-US',
                },
            },
        };

        // Send request and log result
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.send(JSON.stringify({ message: result.fulfillmentText }))
    }
}