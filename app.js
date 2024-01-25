const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Here is the Changes I made for 1st AWS Project'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
