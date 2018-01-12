const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const port = 3000
const path = require('path');

const app = module.exports = express()

app.use(bodyParser.json());
app.use(cors() )
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Hey dude, I'm listening`)
  })