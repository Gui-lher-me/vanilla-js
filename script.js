const socket = io('http://localhost:8888');

console.log(socket);

socket.emit('message', { msg: 'hello world' });
