// controllers/notifyController.js
const Notification = require("../models/notificationModel");

const requestNotification = async (request, response) => {
    const { email, productId } = request.body;

    if (!email || !productId) {
        return response.status(400).json({
            message: "Email and productId are required"
        });
    }

    try {
        const newNotification = await Notification.create({
            email,
            productId
        });

        return response.status(201).json({
            message: "Notification request saved",
            data: newNotification
        });

    } catch (error) {
        console.error("Error saving notification:", error);
        return response.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports = {
    requestNotification
};