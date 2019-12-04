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

<<<<<<< HEAD
app.get("/glrooms", (req, res, next) => {
    res.json(["C#"
    ,"JS"
    ,"C++"
]);
});

app.get("/kenneth", (req, res, next) => {
    res.json("name:Kenneth"
    );
});


=======
app.get("/colors", (req, res, next) => {
    res.json([
        "red"
        , "black"
        , "blue"
    ]);
});

>>>>>>> e32b85dc7e129894b34bde54f422c4dbac51fae3
app.listen(3000, () => {
    console.log("Workshop Adia Server running on Port: 3000");
});

