import express, { Request, Response, NextFunction } from 'express';
import { createServer } from 'http';


const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

const server = createServer(app);
const port = 8080;

app.use(express.json())

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

app.post("/test", async (req: Request, res: Response) => {
    await controller.testConnections(req, res)
})

app.get("/jokes", (req: Request, res: Response) => {
    console.log("Its running!")
    res.status(200).send({message: 'Server is running'});
});
