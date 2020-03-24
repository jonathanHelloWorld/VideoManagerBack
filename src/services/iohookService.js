
import {openBrowser,closeBrowser} from './puppeterService'
const iohook = require('iohook');

iohook.on("keypress", event => {
    console.log(event);
    closeBrowser();
    // {keychar: 'f', keycode: 19, rawcode: 15, type: 'keypress'}
});
  
iohook.on("mouseclick",function(msg){
    console.log(msg);
});
  
// iohook.start();

export default iohook;

