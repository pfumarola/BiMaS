const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const connectDB = require('./utils/database').connectDB;

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

app.use(helmet());

//Security header
app.use(bodyParser.json());

app.use(bikeRoutes);
//app.use(stationRoutes);

app.use(errorController.get404);

app.use((error, req, res, next) =>{
  res.status(error.httpStatusCode).send("Errore");
})
console.log("Server is starting...");
setTimeout(()=>{
  connectDB( () =>{
    app.listen(3000);
    console.log('Server started on port', process.env.PORT || 3000);
  })
}, 1000);
