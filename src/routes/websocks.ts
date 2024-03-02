import WebSocket from 'ws';

const handleWebSocket = (wss: WebSocket.Server) => {
    
  wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send("Você concentou em mim")

    ws.on('message', (message) => {
      console.log(`mensagem recebida: ${message}`);

      // Eviar para o clinete
      ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
};

export { handleWebSocket };
