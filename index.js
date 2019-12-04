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

app.get("/kenneth", (req, res, next) => {
    res.json("name:Kenneth"
    );
});


app.listen(3000, () => {
    console.log("Workshop Adia Server running on Port: 3000");
});

