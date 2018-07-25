import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

export const sendMessage = (message, timestamp) => {
 socket.emit('message', {
  message,
  timestamp
 });
}