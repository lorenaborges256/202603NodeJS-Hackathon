# 202603NodeJS-Hackathon
## This is my first Hackathon Project. Theme: NodeJS, Start: ASAP, Finish: End of 29th March 2026

### Main idea - Notify me App, a stock alert app for your e-commerce.

- When product1 stock = 0  
botton shows = "Notify me when is available"  
User click in the botton, open a form  
User write their email, and click ok.

- When product1 stock > 0  
botton shows = " Add to cart"  
When stock update, program send an email to the User who wanted to be notified.

### Initialize the NodeJS Hackathon Project

1. Initializing npm:

```bash
npm init -y 
```

2. Installing Dependencies - Install Express and Mongoose. (Additional packages may be added as needed.)

```bash
npm install express mongoose
```

3. Adding Scripts, inside package.json, add scripts to run and auto‑reload the server:
```Json
"scripts": { 
    "start": "node ./src/index.js", 
    "dev": "node --watch ./src/index.js" 
} 
```

4. Structuring the Server Files  
4.1  index.js — Starting the Server

```js
const app = require('./server.js'); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log(`Example app listening on port http://localhost:${PORT}`); 
}); 
```

4.2  server.js — Configuring Express

```js
const express = require('express'); 
const app = express(); 
app.get('/', (require, response) => { 
    res.json({ message: "Hello, world" }); 
});

module.exports = app; 
```