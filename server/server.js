const port = 8000;
const io = require('socket.io')();

io.on('connection', client => {
 console.log('a new client has joined the chat');
 client.on('message', msg => {
  console.log('Incoming message ', msg);
 });

 client.on('disconnect', () => {
  console.log('client was disconnected');
 });
});

io.listen(port);
console.log('Listening on port ' + port);