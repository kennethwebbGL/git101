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

<<<<<<< HEAD
<<<<<<< HEAD
app.get("/glrooms", (req, res, next) => {
    res.json(["C#"
    ,"JS"
    ,"C++"
]);
});

=======
app.get("/kenneth", (req, res, next) => {
    res.json("name:Kenneth"
    );
});


>>>>>>> 77c8993e6bad092b33993cdcc3b521c660746798
=======
app.get("/luis", (req, res, next) => {
    res.json([
        "name:LuisR"
    ]);
});

>>>>>>> Adding LuisR method
app.listen(3000, () => {
    console.log("Workshop Adia Server running on Port: 3000");
});

