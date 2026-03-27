# 202603NodeJS-Hackathon
## This is my first Hackathon Project. Theme: NodeJS, Start: ASAP, Finish: End of 29th March 2026
*I am using this project to write a step-by-step intructions to solidfy my understanding*

### Main idea - Notify me App, a stock alert app for your e-commerce.

- When product1 stock = 0  
button shows = "Notify me when is available"  
User click in the button, open a form  
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

- index.js — Starting the Server

```js
const app = require('./server.js'); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log(`Example app listening on port http://localhost:${PORT}`); 
}); 
```

- server.js — Configuring Express

```js
const express = require('express'); 
const app = express(); 
app.get('/', (require, response) => { 
    res.json({ message: "Hello, world" }); 
});

module.exports = app; 
```

5. Core features

    1. **Product page**  
    When stock = 0: "Sold out" button (not clickable) + "Notify me" button  
    When stock > 0: "Add to cart" button (clickable)  

    2. **Notify me form page** with "write your email here" field and "Send" button  

    3. **Product entity table** (product_id, Name, qty, last_update)  

    4. **User entity table** (tamestamp, email, product_id)

    5. User can request notifications:  
    POST/notify  
    -- user email  
    -- product ID

    6. Admin can update stock  
    PATCH /products/:id  
    -- stock: number

    7. List Products
    GET/products

    8. When stock > 0 -> send email  
    “check stock on update” function.

6. Creating Routes (just the parts we need now)  
In MVC, routes should NOT contain logic

    ```bash
    routes/
        notifyRoutes.js
        productRoutes.js
    ```

    1. User can request notifications:  
    POST/notify  
    -- user email  
    -- product ID

    6. Update stock  
    PATCH /products/:id  
    -- stock: number

    7. List Products  
    GET/products  
    Was created a temporary list of products

7. Creating Controllers

```bash
controllers/
    notifyController.js
    productController.js
```

8. Creating Model (MongoDB schemas) (Notification, Product, User)
    1. Install Mongoose and dotenv
```npm install mongoose dotenv```

    2. Connecting your app to MongoDB Atlas

    Username: nodejs_db_user
    Password: bananas
    mongodb+srv://nodejs_db_user:bananas@nodejshackathon.uyznrs0.mongodb.net/

10. Adding Nodemailer to send real emails (if time permit)
