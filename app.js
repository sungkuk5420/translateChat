var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// var server = require('http').createServer(app);
// io = require('socket.io')(server);
// io.on('connection',function(client){
//   console.log(client);
//   client.on('event', function(data){});
//   client.on('disconnect', function(){});
//   socket.emit('toclient',{msg:'Welcome !'});
// });
// server.listen(5000, function () {
//   console.log('Example app listening on port 5000!')
// });


var httpServer =http.createServer(app).listen(3000, function(req,res){
  console.log('Socket IO server has been started 3000!');
});
// upgrade http server to socket.io server
io = require('socket.io').listen(httpServer);

io.sockets.on('connection', function(socket) {

  // on public
  socket.on('join', function (data) {
    io.sockets.emit('join', socket.id, data);
  });

  // on broadcast
  socket.on('message', function (data) {
    console.log(socket.id);
    console.log(data);
    socket.emit('my message', socket.id, data);
    socket.broadcast.emit('other message', socket.id, data);
  });

  // on privat
  socket.on('whisper', function (id, data, fn) {
    if (id && io.sockets.sockets[id]) {
      io.sockets.sockets[id].emit('whisper', socket.id, data);
      fn(true);
    } else {
      fn(false);
    }
  });

  socket.on('disconnect', function () {
    socket.broadcast.emit('close', socket.id);
  });

});