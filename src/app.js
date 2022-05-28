const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const engine = require('ejs-mate');
const config = require('../config.js');
const app = express();
const server = http.Server(app);
const io = socketIO(server);

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// routes
app.use(require('./routes'));

// sockets
require('./sockets')(io);

// Static files
app.use(express.static(path.join(__dirname, 'public')));



const PORT = config.PORT;
const HOST = config.HOST;
// starting the server
server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)