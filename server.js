const express = require("express");
const app = express();
const bodyParser = require("body-parser")

var items = [];
var length = 0;
var prices=[];
var total =0;



app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

app.use('/public',express.static("public"));

app.get("/main", function (req, res) {
 
    res.render("main", {newitems: items, newprice: prices, len: length, sum: total});
   
})

 app.listen(3000, function(){
 console.log("server started");
 })

app.get("/men", function (req,res) {
    res.render("men",{newitems: items, newprice: prices, len: length, sum: total});
   
})
app.post("/men", function (req, res) {
    var itemName = req.body.itemname;
    items.push(itemName);
    length = items.length;
var itmprice = req.body.itemprice;
prices.push(itmprice);
 
    total = total + parseInt(prices[prices.length - 1]); 
    
 
 
    res.redirect("/men")
   
})
app.get("/women", function (req,res) {
    res.render("women",{newitems: items, newprice: prices, len: length, sum: total});
   
})
app.post("/women", function (req, res) {
    var itemName = req.body.itemname;
    items.push(itemName);
    length = items.length;
var itmprice = req.body.itemprice;
prices.push(itmprice);
total = total + parseInt(prices[prices.length - 1]); 

    res.redirect("/women")
   
})

//