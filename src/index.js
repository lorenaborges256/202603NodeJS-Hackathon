// this file specifically just starts the server
const app = require('./server.js'); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    // callback to confirm that the server is now running and active 
    console.log(`Example app listening on port http://localhost:${PORT}`); 
});