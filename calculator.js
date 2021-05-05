const express = require("express");
const app = express();

app.use(express.urlencoded()); //bodyparser

// send the html
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//return the post req
app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("here ur added numbers: " + result);
});


app.listen(3000,function(){
    console.log("server running on port 3k");
});