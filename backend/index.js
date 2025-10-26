import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cookieParser from "cookie-parser";
import holdingsRouter from "./routes/holdings.routes.js";
import positionsRouter from "./routes/positions.routes.js";
import ordersRouter from "./routes/orders.route.js";
import cors from "cors";

// Environment Variables Configuration
if (process.env.NODE_ENV !== "production") {
    dotenv.config({});
}

// App Creation
const app = express();
const PORT = process.env.PORT || 5005;

// CORS 
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Database Connection
connectDB();

// Default Middlewares 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// APIs
app.use("/api/v1/holdings", holdingsRouter);
app.use("/api/v1/positions", positionsRouter);
app.use("/api/v1/orders", ordersRouter);

// App Entry Point
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});