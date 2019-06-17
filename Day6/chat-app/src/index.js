const path = require('path');
const http =require('http');
const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

let count = 0;
io.on('connection', function(socket) {
    console.log('connection establish');
    socket.emit('onCountUpdated', count);
    socket.on('increment', () => {
        count++;
        //socket.emit('onCountUpdated', count);
        io.emit('onCountUpdated', count);
    });
});



server.listen(3000);
