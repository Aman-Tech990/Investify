import { Position } from "../models/PositonsSchema.js";

export const allPositions = async (req, res) => {
    try {
        const allPositions = await Position.find({});
        if (!allPositions) {
            return res.status(404).json({
                success: false,
                message: "No Postions data found!"
            });
        }
        return res.status(200).json({
            success: true,
            message: "All positions fetched successfully!",
            allPositions
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch all Positions!"
        });
    }
}