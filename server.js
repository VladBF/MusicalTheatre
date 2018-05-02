let express = require('express');
let bodyParser = require('body-parser');
let server = express();
let path = require('path');


server.use(express.static('public')); // доступ к файлам которые розположены в public
server.use(bodyParser.urlencoded({extended:true})); /*подключили body-parser*/
server.use(bodyParser.json());


server.get('/actorsList',require('./controllers/actors-data.js'));
server.get('/repertoireList',require('./controllers/repertoire-data.js'));

server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});



server.listen(3001);