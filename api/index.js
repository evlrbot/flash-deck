const express = require('express');
const app = express();
const port = 80;
const router = express.Router();

app.listen(port);
console.log("Express Server Listening on "+port);


