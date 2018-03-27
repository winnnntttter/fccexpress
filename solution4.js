const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.get('/home', function(req, res) {
  res.render('formhome');
});

app.listen(process.argv[2] || 3000);