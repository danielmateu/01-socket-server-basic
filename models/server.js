const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // https server
        this.server = http.createServer(this.app);

        // configuraciones sockets
        this.io = socketio(this.server, {/* configuraciones */ });
    }

    middlewares() {
        // Desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    // Configurar Sockets
    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {
        // Inicializar middlewares
        this.middlewares();

        this.configurarSockets();

        // Inicializar server
        this.server.listen(8080, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }
}

module.exports = Server;