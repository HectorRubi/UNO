import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello World');
});

io.on('connection', (socket) => {
  console.log('A new user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('create room', (msg) => {
    console.log('Room created: ', msg);
  });

  socket.on('join room', (msg) => {
    console.log('Room joined: ', msg);
  });

  socket.on('play card', (msg) => {
    console.log('Card played: ', msg);
  });

  socket.on('take card', (msg) => {
    console.log('A card was taken from the deck: ', msg);

    io.emit('take card', msg);
  });
});

server.listen(3000, () => {
  console.log('Server is running...');
  console.log('Listening on localhost:3000');
});
