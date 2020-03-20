const keypress = require('keypress');
// var tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

function keyInit(){

    process.stdin.on('keypress', function (ch, key) {
        console.log('got "keypress"', key);
        if (key && key.ctrl && key.name == 'c') {
          process.stdin.pause();
        }
      });
       
    //   process.stdin.setRawMode(true);
      process.stdin.resume();
}
console.log("keypress js");


export default keyInit;