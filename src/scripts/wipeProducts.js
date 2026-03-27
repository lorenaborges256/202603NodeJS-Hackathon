require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/productModel");

const wipeProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await Product.deleteMany({});
        console.log("All products deleted");
        process.exit(0);
    } catch (error) {
        console.error("Error wiping products:", error);
        process.exit(1);
    }
};

wipeProducts();