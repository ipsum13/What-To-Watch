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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

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
