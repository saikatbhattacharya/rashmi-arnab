var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.htm');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});