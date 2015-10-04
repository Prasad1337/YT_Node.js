var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var search = require('youtube-search');
var fs = require('fs');

var opts = {
  maxResults: 10,
  key: 'AIzaSyCRkA8jZDGPdruUEagouxWPkbK6t5ULMNY'
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
})

var searchTerm="Astrix";

function searchYT(term)
{
  var str;
  search(term, opts, function(err, results) {
    if(err) return console.log(err);

    str = JSON.stringify(results,null,4);

    fs.writeFile("./results.json", str, function(err) {
      if(err) {
        return console.log(err);
      }
    });
  });
}

app.get('/test', function (req, res) {
  res.send('test');
});

searchYT(searchTerm);

app.locals.resultsData = require('./results.json');

module.exports = app;
