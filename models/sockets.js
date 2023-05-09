


class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents(io) {
        // On connection
        this.io.on('connection', (socket) => {
            
          // Escuchar evento del cliente
            socket.on('mensaje-cliente', (data) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data)
            });



        });
    }
}

module.exports = Sockets;