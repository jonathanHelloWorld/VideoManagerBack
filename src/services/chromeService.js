const cp = require('child_process'),
    url_to_open = 'http://localhost:3000/static/';




export default function OpenChrome(){
    // console.log("entrou here");
    cp.spawn('c:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', ['-kiosk', url_to_open]);
}
