const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.get("/", (req,res) => {
    res.send({
        id: 1,
        email: "merciarandrianome@gmail.com",
        firstname: "mercia",
        lastname: "popoff",
        birthdate: new Date(1990, 9, 6),
    });
});
