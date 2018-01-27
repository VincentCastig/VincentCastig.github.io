
const express = require('express');
const path = require('path');
const port = 3000

const app = module.exports = express();
app.use(express.static(path.join(__dirname, './public')));
 //Connects to heroku bro


app.listen(port, () => { console.log(`Listening on port: 3000`)});