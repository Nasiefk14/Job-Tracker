import express, { type Express, type Request, type Response, type NextFunction } from "express";
import { healthRouter } from "./routes/health.js";

export const app: Express = express();

app.use(express.json());

app.use("/api", healthRouter)

app.use((res: Response) => {
    res.status(404).send({ error: "Not Found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something broke!' });
});