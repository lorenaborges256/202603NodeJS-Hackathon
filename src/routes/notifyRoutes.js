// Import the Express package
const express = require("express");
const router = express.Router();

// Controller logic can be added later
router.post("/", (request, response) => {
    const { email, productId } = request.body;

    if (!email || !productId) {
        return response.status(400).json({ message: "Email and productId are required" });
    }

    console.log(`User ${email} wants notification for product ${productId}`);

    response.status(201).json({
        message: "Notification request received",
        data: { email, productId }
    });
});

module.exports = router;
