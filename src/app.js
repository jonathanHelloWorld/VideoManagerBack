import express from 'express';
import OpenChrome,{CloseChrome} from './services/chromeService'
import sio from 'socket.io'
import http from 'http'


const app = express();

app.use('/static', express.static(process.cwd() + '/public'));

const server = http.createServer(app)
const io = sio.listen(server)

setImmediate(() => {
  server.listen(3000, () => {
    console.log('Express server listening on http://%s:%d, in %s mode')
  })
})

var socketId;

io.on('connection', function(socket){
  console.log('a user connected');

  socketId = socket.id;
  
  socket.emit('play',"teste.mp4");

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('any event', function(msg){
    console.log('message: ' + msg);
  });

  socket.on('stop', function(index){
    console.log('index' + index);
  });

  socket.on('play', function(index){
    console.log('index % ',index);
  });

});

setTimeout(()=>{
  io.to(socketId).emit('play', "teste2.mp4");
},5000);

OpenChrome();

// setTimeout(()=>{
//   console.log("entrou here2");
//   CloseChrome();
// },5000);

