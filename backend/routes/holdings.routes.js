import express from "express";
import { allHoldings } from "../controllers/holdings.controller.js";

const router = express.Router();

router.get("/allHoldings", allHoldings);

export default router;