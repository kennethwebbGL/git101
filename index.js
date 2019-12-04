var express = require("express");
var app = express();

app.get("/teammates", (req, res, next) => {
    res.json([
        "Adrian"
        ,"Alejandro"
        ,"Alexander P"
        ,"Alexander R"
        ,"Ana Beatriz"
        ,"Andres"
        ,"Brandon"
        ,"Christian"
        ,"Ernesto"
        ,"Gia"
        ,"Jean Carlo"
        ,"Jimmy"
        ,"Jorge"
        ,"Kenneth"
        ,"Kristopher"
        ,"Laura"
        ,"Luis"
        ,"Mike"
        ,"Olman"
        ,"Rhedil"
        ,"Rob"
        ,"Rolo"
        ,"Royner"
    ]);
});

app.get("/pato", (req, res, next) => {
    res.json([
        "pato"
        ,"pato"
        ,"pato P"
        ,"pato R"
        ,"pato Beatriz"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato Carlo"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"pato"
        ,"Rolo"
        ,"pato"
    ]);
});

app.listen(3000, () => {
    console.log("Workshop Server running on Port: 3000");
});