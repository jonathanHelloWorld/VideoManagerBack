
import express from 'express';
import OpenChrome from './services/chromeService'

const app = express();


app.use('/static', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

OpenChrome();

