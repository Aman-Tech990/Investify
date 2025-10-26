import express from "express";
import { postNewOrder } from "../controllers/orders.controller.js";

const router = express.Router();

router.post("/newOrder", postNewOrder);

export default router; 