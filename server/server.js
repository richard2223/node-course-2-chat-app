const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new client connected');

  socket.emit('newMessage', {
    from: 'dick',
    text: 'helo',
    createdAt: 0
  });

  socket.on('createMessage', (message) => {
    console.log('on createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log(`server up :${port}`);
});
