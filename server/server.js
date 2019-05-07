const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const process = require('process');
const { Pool } = require('pg');

// configuring evn varible.
require('dotenv').config()

global.app = express();

global.pool = new Pool();

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, '/client/wordCounter')));


require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/wordCounter/index.html'));
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App listening on port ${process.env.SERVER_PORT}!`)
});

// handling uncaught exception
process.on("uncaughtException", function(err) {
  console.error(err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', reason.stack || reason)
})
