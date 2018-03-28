const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/puthome', function(req, res) {
  res.render('puthome');
});
app.put('/message/:id',(req,res)=>{
  let id = req.params.id;
  let str = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest('hex');
  res.send(str);
});
//form表单不能提交put方法，用ajax或者curl -H 'Content-Type: application/json' -X PUT -d '{"beijing":{"zhao":{"like":"listening"}}}' "http://localhost:3000/message/123" -i
app.listen(process.argv[2] || 3000);