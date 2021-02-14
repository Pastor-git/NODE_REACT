const functions = require("./functions")
const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine","hbs");
app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use("/js", express.static(path.join(__dirname,"./js")));

app.get("/", function(req,res){
    // res.send("Główna domena")
    res.render("index", {
        pageTitle: "Zajęcia",
        subTitle: functions.subtitle,
        subsubTitle: functions.sample()
    })
})
app.get("/about",function(req,res){
    // res.send("Strona o mnie")
    res.render("about")
})

app.listen(port, (err) => {
    if (err) { return console.log(`błąd ${err}`)}
    console.log(`serwer działa na porcie ${port}`)
})