import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT: string = process.env.PORT || '9000';

const app: Express = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Ts server');
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
