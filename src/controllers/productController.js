const Product = require("../models/productModel");

// GET /products
const listProducts = async (request, response) => {
    try {
        const products = await Product.find();
        return response.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return response.status(500).json({ message: "Internal server error" });
    }
};

// PATCH /products/:id
const updateStock = async (request, response) => {
    const { id } = request.params;
    const { stock } = request.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { stock },
            { new: true } // return updated document
        );

        if (!updatedProduct) {
            return response.status(404).json({ message: "Product not found" });
        }

        console.log(`Product ${id} stock updated to ${stock}`);

        return response.json({
            message: "Stock updated",
            product: updatedProduct
        });

    } catch (error) {
        console.error("Error updating product:", error);
        return response.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    listProducts,
    updateStock
};