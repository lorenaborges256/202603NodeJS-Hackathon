const express = require("express");
const router = express.Router();

const { listProducts, updateStock } = require("../controllers/productController");

// GET /products
router.get("/", listProducts);
// PATCH /products/:id
router.patch("/:id", updateStock);

module.exports = router;