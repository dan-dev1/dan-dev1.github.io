const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main.js', (req, res) => {
	res.sendFile(__dirname + '/main.js');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("signal_server", (msg) => {
	  var data_type = "";
	  msg.hasOwnProperty("desc") ? data_type = "desc" : data_type = "ice";
	  console.log(data_type + " signalling data recieved by the server");
	  socket.broadcast.emit("signal_client", msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});