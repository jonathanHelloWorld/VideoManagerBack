
console.log("entrou here");
var socket = io();
var currentVideo = "";
//   socket.emit('any event', "event hello world!");

socket.on('play', function(videoName){

    if(currentVideo !== videoName){

        console.log("sss");
        var elem = document.getElementById("myVideo");
        var source = document.getElementById('mySource');
        elem.pause();
    
        source.setAttribute('src', videoName);
    
    
        elem.load();
        elem.play();
        currentVideo = videoName;
    }
});

socket.on('stop', function(msg){
console.log(msg);
});
