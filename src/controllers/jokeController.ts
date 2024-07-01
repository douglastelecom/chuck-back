import { MongodbService } from './../../services/mongodbService';
import { Request, Response } from 'express';
export class JokeController {
    
    mongodbService = new MongodbService();
    
    saveJoke(req: Request, res: Response){
        this.mongodbService.saveJson(req.body.joke_description)
        res.status(200).send()
    }

    getJoke(req: Request, res: Response){
        const joke = this.mongodbService.getRandomJoke()
        res.status(200).send(joke)
    }
}