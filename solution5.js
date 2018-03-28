var express = require('express');
var app = express();
var path = require('path');

app.use(require('stylus').middleware(process.argv[3] || 'public'));
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));


app.listen(process.argv[2]||3000);