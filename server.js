// this file is backaend and entry point to everything
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set statis folder
app.use(express.static(path.join(__dirname, 'public')));


//rum when a client connects
io.on('connection', socket => {
    console.log('New WS Connection...');

    socket.emit('message', 'Welcome to CodeConnect!!');

    //broadcast when a user connects 
    socket.broadcast.emit('messsage', 'A user has joined the chat');

    //Runs when client disconnect
    socket.on('disconnect' , () => {
        io.emit('message', 'A user has left the chat.')
    })

});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));