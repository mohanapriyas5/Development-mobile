const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/public')));


// app.use('/users', users);
// app.use('/create', controller.createImage);

require(path.resolve('./app/routes/route'))(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(3050, '10.219.194.231', () => {
	console.log('Server Listening to http://'+server.address().address+':'+server.address().port);
});

// Error Handler
process.on('uncaughtException', (err) => {
    console.log('Uncaught Error Stack:' + err.stack);
    console.log('Uncaught Error Message:' + err.message);
});

module.exports = app;

