import WebSocket from 'ws';

const handleWebSocket = (wss: WebSocket.Server) => {

  wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send("Você conectou em mim");

    ws.on('message', (message) => {
      console.log(`mensagem recebida: ${message}`);

      ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    const interval = setInterval(() => {
      ws.send('Hello');
      console.log('mensagem enviada')
    }, 500);

    ws.on('close', () => {
      console.log('Client disconnected');
      clearInterval(interval);
    });
  });
};

export { handleWebSocket };
