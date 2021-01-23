const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// This will be our application entry. We'll setup our server here.
const http = require("http");
// Set up the express app
const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:8081",
};

app.use(cors(corsOptions));
// Log requests to the console.
app.use(logger("dev"));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
require("./routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness.",
  })
);
const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;

// const express = require('express');
// const app = express();
// const sequelize = require('./data_base/db');
// // const User = require('./database/models/User');

// // Setting
// const PORT = process.env.PORT || 3000;

// // Rutas
// // app.get('/', function (req, res) {

// //     User.create({
// //         name: "Pepe",
// //         birthday: new Date(1999, 4, 6)
// //     }).then(user => {
// //         res.json(user);
// //     });

// //     // User.findAll().then(users => {
// //     //     res.json(users);
// //     // });

// // });

// app.get('/', (req, res) => res.send('Hello World desde Express'));

// // Arrancamos el servidor
// app.listen(PORT, function () {
//     console.log(`Iniciar en http://localhost:${PORT}`);

//     // // Conectase a la base de datos
//     // // Force true: DROP TABLES
//     sequelize.sync({ force: true }).then(() => {
//         console.log("Nos hemos conectado a la base de datos");
//     }).catch(error => {
//         console.log('Se ha producido un error', error);
//     })

// });
