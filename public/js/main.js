const chatForm = document.getElementById('chat-form');


const socket = io();

socket.on('messaage', message => {
    console.log(message);
})