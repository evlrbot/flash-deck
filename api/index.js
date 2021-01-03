const express = require('express');
const app = express();
const port = 80;
const router = express.Router();
const cardData = ['test', 'foo', 'man', 'chu', 'bar', 'baz', 'dog', 'cat', 'mouse'];
const cors = require('cors');

app.use(cors());
app.listen(port);
console.log("Express Server Listening on "+port);

app.get('/cards', (req, res) => {
    res.send(cardData);
});


