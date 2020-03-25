const express = require("express");
const mysql = require("mysql");
const settings = require("./settings.json");

const sqlConfig = settings.sqlConfig;

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.get("/", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query("SELECT id, email, firstname, lastname, birthdate FROM node_users", (error, result) => {
        if (error) {
            console.log("ERROR :", error.code);
        } else {
            console.log("RESULT :", result);      
        }
        sqlConnection.end();
    });
	
    res.send({
        id: 1,
        email: "merciarandrianome@gmail.com",
        firstname: "mercia",
        lastname: "popoff",
        birthdate: new Date(1990, 9, 6),
    });
});


