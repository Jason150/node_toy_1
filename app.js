var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('안녕 이다 이 새끼야');
});

app.post('/', function (req, res) {
  res.send('이건 포스트다 이 새끼야');
});

app.put('/user', function (req, res) {
  res.send('이건 풋이다 이 새끼야');
});

app.delete('/user', function (req, res) {
  res.send('이건 딜리트다 이 새끼야');
});

app.use('/static', express.static('public'));

app.listen(3000, function () {
  console.log('Examle app listening on port 3000!')
});
