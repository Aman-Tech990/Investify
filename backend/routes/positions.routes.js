import express from "express";
import { allPositions } from "../controllers/positions.controller.js";

const router = express.Router();

router.get("/allPositions", allPositions);

export default router;