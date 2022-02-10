
const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send(`<h1>Hello, Rhema!</h1>
    <p>Today is a great day :)</p>`);
});

app.get("/contact", function(req, res){
  res.send("Contact me at: rhemar@tengroup.com");
});

app.get("/about", function(req, res){
  res.send(`<h1>This website is authored by R Rhema</h1>
    <p>Rhema is an aspiring full stack developer who enjoys learning new technology and playing around with them <3. Peace!</p>`);
});

app.get("/hobbies", function(req, res){
  res.send(`<ul><li>Coffee</li><li>Colouring</li></ul>`);
});

app.listen(3000, function(){
  console.log("Server has started at port 3000");
});
