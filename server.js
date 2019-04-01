// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
// const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

/*app.use(cors({
  credentials: true,
  origin: '*'
}));*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/myWeb5610')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://heroku_9vhc3k03:a50c03ees3p21dbka92qjpc7ug@ds031541.mlab.com:31541/heroku_9vhc3k03', {useNewUrlParser: true});



const port = process.env.PORT || '3200';
app.set('port', port);
require('./server_services/app')(app);

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));



