let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3003, function () {
  console.log('Server is listening on port 3003');
});

module.exports = app;
