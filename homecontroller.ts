import { Request, Response } from "express";
import * as path from 'path'

export class HomeController {
    public index_GET(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, 'index.html'))
    }
}