import { Order } from "../models/OrdersSchema.js";

export const postNewOrder = async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;

        if (!name || !qty || !price || !mode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const order = await Order.create({ name, qty, price, mode });

        return res.status(201).json({
            success: true,
            message: "Order placed successfully!",
            order
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server: Failed to post a new order!"
        });
    }
}