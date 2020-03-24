import express from 'express';
import iohook from './services/iohookService'
import {openBrowser,closeBrowser} from './services/puppeterService'
import sio from 'socket.io'
import http from 'http'

const app = express();
app.use('/static', express.static(process.cwd() + '/public'));

const server = http.createServer(app)
const io = sio.listen(server)
var isOpenBrowser = false;

setImmediate(() => {
  server.listen(3000, () => {
    console.log('Express server listening on http://%s:%d, in %s mode')
  })
})

iohook.start();

var socketId;
io.on('connection', function(socket){
  console.log('a user connected');

  socketId = socket.id;
  
  // socket.emit('play',"teste.mp4");

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('stop', function(index){
    console.log('index' + index);
  });

  socket.on('play', function(index){
    console.log('index % ',index);
  });

});

function play(videoName){

  if(!isOpenBrowser){

    (async () => {

      isOpenBrowser = true;
      await closeBrowser();
      await openBrowser();
      io.to(socketId).emit('play', videoName);
   })();

  }else{
    io.to(socketId).emit('play', videoName);
  }
}

setTimeout(()=>{
   play("teste.mp4");
},1000);

setTimeout(()=>{
  play("teste2.mp4");
},10000);



