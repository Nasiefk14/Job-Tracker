import express, { type Request, type Response } from "express";
const router = express.Router();

router.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
});

export { router as healthRouter };