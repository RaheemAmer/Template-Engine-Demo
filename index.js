const express = require("express");
const app = express();

// Setting the view engine or template engine
app.set("View Engine", "Ejs");

app.get('/', function (req, res) {
    res.render("index");
})

app.get("/user", function (req, res) {
    const user = {
        name: "Raheem Amer",
        stack: "MERN",
        email: "example@gmail.com",
        hubby: ["Music", "Football", "Reading", "Programming"]
    }
    res.render("user", { user });
})

app.listen(300);