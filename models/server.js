const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {socketController} = require('../controllers/sockets.controller')


class Server {
    
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        //!To verify everything is working with socket.io, I can go to dev_url/socket.io/socket.io.js
        //!I must see all the methods related to the client control which should be load at my html 
        //!And at network section on the we browser I should see socket.io.js and socket.io.client.js
        this.middlewares();
        this.routes();
        this.sockets();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        //* Here I'll call and use all y middlewares
    }

    routes (){
        //*Here I'll call and use all my routes
    }

    sockets(){
        //*This is to configure and call sockets functions
        this.io.on('connection',socketController);
    }

    listen(){
        //*This is launch the server
        //!Usually I use this.app to launch the server from express in this case I'll use the server from socket io 
        this.server.listen(this.port,()=>{
            console.log("Sever woking on port "+ this.port );
        });
    }
}

module.exports = Server