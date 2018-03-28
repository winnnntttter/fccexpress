const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.get("/books",(req,res)=>{
  let fileName = process.argv[3] || __dirname+'/public/books.txt';
  fs.readFile(fileName,(error,data)=>{
    let books = "";
    if (error) {
      console.error(error); 
      return res.sendStatus(500);
    }
    try{
      books = JSON.parse(data);
    }catch(e){
      console.error(e);
      res.sendStatus(500);
    }
    res.json(books);
  });
}); 

app.listen(process.argv[2] || 3000);