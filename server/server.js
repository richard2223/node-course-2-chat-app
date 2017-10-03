const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new client connected');

  socket.emit('newMessage', generateMessage('admin', 'welcome'));
  socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('on createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('ack');
  });

  socket.on('createLocationMessage', (coords) => {
    console.log('on createLocationMessage', coords);
    io.emit('newLocationMessage', generateLocationMessage('sys', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log(`server up :${port}`);
});
