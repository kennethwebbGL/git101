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
        ,"Lau"
        ,"Luis"
        ,"Mike"
        ,"Olman"
        ,"Rhedil"
        ,"Rob"
        ,"Rolo"
        ,"Royner"
        ,"Lau 2"
    ]);
});

app.get("/glrooms", (req, res, next) => {
    res.json(["C#"
    ,"JS"
    ,"C++"
    ]);
});

app.get("/kenneth", (req, res, next) => {
    res.json("name:Kenneth");
});
app.get("/olman", (req, res, next) => {
    res.json({
        name: "Olman",
        lastName: "Mora"
    });
});

app.get("/colors", (req, res, next) => {
    res.json([
        "red"
        , "black"
        , "blue"
    ]);
});

app.listen(3000, () => {
    console.log("Workshop Adia Server running on Port: 3000");
});

