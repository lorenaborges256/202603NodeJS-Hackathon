// Import the Express package
const express = require("express");
const router = express.Router();

const { requestNotification } = require("../controllers/notifyController");

router.post("/", requestNotification);

module.exports = router;
