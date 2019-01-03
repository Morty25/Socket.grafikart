var http = require('http');

httpServer = http.createServer(function(req, res){
    res.end('Hello Nath');
    console.log("Petit coucou serveur");
});

httpServer.listen(1337);

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', function(socket){
    console.log("nouveau utilisateur");

    socket.on('login', function(user){
        console.log(user);
    })
});