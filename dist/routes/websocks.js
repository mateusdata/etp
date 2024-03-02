"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWebSocket = void 0;
const handleWebSocket = (wss) => {
    let total = 0;
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
            ws.send('Mensagens respondida => ' + String(total + 1));
            console.log('mensagem enviada ' + String(total++));
        }, 1);
        ws.on('close', () => {
            console.log('Client disconnected');
            clearInterval(interval);
        });
    });
};
exports.handleWebSocket = handleWebSocket;
