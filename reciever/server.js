const fs = require('fs');
const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

// Crear una carpeta 'output' si no existe
const outputDir = './output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

//Manejado de eventos
wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  const fileStream = fs.createWriteStream(`${outputDir}/output_${Date.now()}.wav`, { flags: 'w' });

  ws.on('message', (message) => {
    fileStream.write(message);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
    fileStream.end();
  });
});

console.log(`Servidor WebSocket escuchando en el puerto ${PORT}`);
