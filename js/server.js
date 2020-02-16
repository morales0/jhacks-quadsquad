/* Main server script */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
   console.log("Server open on port 3000");
});
app.listen(3000);