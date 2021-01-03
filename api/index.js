// express includes
const express = require('express');
const app = express();
const port = 80;
const router = express.Router();
const cors = require('cors');

// deck data for routes
const cardData = ['test', 'foo', 'man', 'chu', 'bar', 'baz', 'dog', 'cat', 'mouse'];

app.use(cors()); b// enable CORS request from any FQDN
app.listen(port);
console.log("Express Server Listening on " + port);

// return card data
app.get('/cards', (req, res) => {
    res.send(cardData);
});


