// backend/signaling.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log("🔌 New socket:", socket.id);

  socket.on('signal', (data) => {
    // Forward signaling data to the other peer
    io.to(data.target).emit('signal', {
      signal: data.signal,
      from: socket.id
    });
  });

  socket.on('join', () => {
    socket.broadcast.emit('peer-joined', { id: socket.id });
  });
});

server.listen(4000, () => {
  console.log("✅ Signaling server running on port 4000");
});
