import { Holding } from "../models/HoldingSchema.js";

export const allHoldings = async (req, res) => {
    try {
        const allHoldings = await Holding.find({});
        if (!allHoldings) {
            return res.status(404).json({
                success: false,
                message: "No Holding data found!"
            });
        }
        return res.status(200).json({
            success: true,
            message: "All holding fetched successfully!",
            allHoldings
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch all Holdings!"
        });
    }
}