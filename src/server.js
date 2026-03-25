// Set up and configure the Express server
// Import the Express package 
const express = require('express'); 
// Make an instance of an Express server
const app = express(); 

app.use(express.json());

// Import routes
const notifyRoutes = require("./routes/notifyRoutes");
const productRoutes = require("./routes/productRoutes");

// Mount routes
app.use("/notify", notifyRoutes);
app.use("/products", productRoutes);

// Default route
app.get('/', (request, response) => { 
    response.json({ message: "Hello, world" }); 
});


module.exports = app; 