const cp = require('child_process'),
    url_to_open = 'http://localhost:3000/static/index.html';


var child;

export default function openChrome(){
    // console.log("entrou here");
  child =   cp.spawn('c:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', ['-kiosk', url_to_open]);
}

export const  closeChrome = function(){

    console.log('close');
    console.log(child.pid);
    process.kill(child.pid);
}
