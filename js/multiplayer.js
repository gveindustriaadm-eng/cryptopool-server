const socket = io("http://devoted-solace-production-f674.up.railway.app");

socket.on("connect",()=>{
console.log("Conectado ao servidor");
});

function jogarGlobal(){

socket.emit("find_match");

}

socket.on("waiting",()=>{
console.log("Procurando jogador...");
});

socket.on("match_found",()=>{
console.log("Partida encontrada!");
});