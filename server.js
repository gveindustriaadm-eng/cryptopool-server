const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
cors:{origin:"*"}
});

let waitingPlayer = null;

io.on("connection",(socket)=>{

console.log("Jogador conectado:",socket.id);

socket.on("find_match",()=>{

if(waitingPlayer == null){

waitingPlayer = socket;
socket.emit("waiting");

}else{

socket.emit("match_found");
waitingPlayer.emit("match_found");

waitingPlayer = null;

}

});

socket.on("disconnect",()=>{
console.log("Jogador desconectado:",socket.id);
});

});

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
console.log("Servidor rodando na porta",PORT);
});