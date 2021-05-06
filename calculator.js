const express = require("express");
const https = require("https");
const app = express();


app.use(express.json());
app.use(express.urlencoded()); //bodyparser

// send the html READ
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");


});

//return the post req CREATE
app.post("/calculator", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("here ur added numbers: " + result);
});


app.post("/weather", function(req,res){

    // api openweather
    console.log(req.body);
    const country = req.body.weatherfield;
    console.log(country);
    // const countryfixed = country.toLowerCase().charAt(0).toUpperCase();
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=7d48c73cfdbf12b92f38781362d0a8c8";
    console.log(url);

    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            

            const weatherData = JSON.parse(data);
            const temps = Math.round((weatherData.main.temp - 273) * 100) / 100;
            const tempfeel = Math.round((weatherData.main.feels_like - 273) * 100) / 100;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h1>" + country + " Weather is " + weatherDesc + " rn.</h1>");
            res.write("<h2>Feels like: "+ tempfeel+"C° but its: " + temps + "C°</h2>");
            res.write("<img src="+iconurl+">");
            res.send();
            
        })
    })



})

app.listen(3000,function(){
    console.log("server running on port 3k");
});