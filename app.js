
require("dotenv").config({ path: "./config.env" });
const path = require('path');

var createError = require('http-errors');
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db');

var usersRouter = require('./routes/api/users');
var moviesRouter = require('./routes/api/movies');


var app = express();

// connect database
connectDB();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);




if(process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
} else {
  app.get('/', (req, res) => {
      res.send("Api running");
  })
}

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = app;
