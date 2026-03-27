require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/productModel");

const wipeAndSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await Product.deleteMany({});
        console.log("Products wiped");

        const products = [
            { name: "Sneakers", stock: 0 },
            { name: "Headphones", stock: 0 },
            { name: "Laptop Stand", stock: 5 },
            { name: "Wireless Mouse", stock: 2 }
        ];

        await Product.insertMany(products);
        console.log("Products seeded");

        process.exit(0);
    } catch (error) {
        console.error("Error wiping and seeding:", error);
        process.exit(1);
    }
};

wipeAndSeed();