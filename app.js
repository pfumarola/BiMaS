const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const bikeRoutes = require('./routes/bike');
const stationRoutes = require('./routes/station');

const errorController = require('./controllers/error');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST PUT PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

app.use(bikeRoutes);
//app.use(stationRoutes);

app.use(errorController.get404);

app.use((error, req, res, next) =>{
  res.status(error.httpStatusCode).send("Errore");
})

app.listen(3000);
