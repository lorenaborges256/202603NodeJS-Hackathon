const express = require("express");
const router = express.Router();

// Temporary in-memory products
let products = [
    { id: "1", name: "Sneakers", stock: 0 },
    { id: "2", name: "Headphones", stock: 0 }
];

// GET /products
router.get("/", (request, response) => {
    response.json(products);
});

// PATCH /products/:id
router.patch("/:id", (request, response) => {
    const { id } = request.params;
    const { stock } = request.body;

    const product = products.find(p => p.id === id);

    if (!product) {
        return response.status(404).json({ message: "Product not found" });
    }

    product.stock = stock;

    console.log(`Product ${id} stock updated to ${stock}`);

    response.json({
        message: "Stock updated",
        product
    });
});

module.exports = router;