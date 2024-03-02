import express, { Request, Response } from 'express';
import http from 'http';
import WebSocket from 'ws';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import authRoutes from './routes/auth';
import hasConnection from './config/testConection';
import { handleWebSocket } from './routes/websocks';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
hasConnection();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

handleWebSocket(wss); 
app.get("/", (req: Request, res: Response) => {
    res.send({ api: "api v2" })
})
app.use(apiRoutes);
app.use(authRoutes);

server.listen(PORT, () => {
    console.log('\x1b[32m', `Servidor rodando em http://localhost:${PORT}/`, '\x1b[0m');
})
