var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('안녕 이다 이 새끼야');
});

app.listen(3000, function () {
  console.log('Examle app listening on port 3000!')
});
