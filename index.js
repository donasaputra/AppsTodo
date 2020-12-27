const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
// var terminaloop = require('./terminaloop/terminal.oop.js');
// var myterminaloop = new terminaloop(app,routes,bodyParser);
require('dotenv').config();

// import Cors from 'cors';
// import logger from 'morgan';
// const mongoose = require('mongoose');
// const path = require('path');

//DB Connection
require("./sequelize");

// //connect to the database
// mongoose.connect(process.env.DB, { useNewUrlParser: true })
//   .then(() => console.log(`Database connected successfully`))
//   .catch(err => console.log(err));

// //since mongoose promise is depreciated, we overide it with node's promise
// mongoose.Promise = global.Promise;


const port = process.env.PORT || 5000;

// myterminaloop.initiate();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

