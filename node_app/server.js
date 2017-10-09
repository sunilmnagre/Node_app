const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const app = express();


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Mongo Connected! Have beer now :)");
});

app.get('/', function (req, res) {
  res.send("Hey, I'm running in on port : " + port);
});

app.listen(port);
module.exports = app;
