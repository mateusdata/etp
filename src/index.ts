import express, { Request, Response, json } from 'express'
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import authRoutes from './routes/auth';
import hasConnection from './config/testConection';

dotenv.config();
const PORT = 3000
const app = express();
app.use(express.json())
hasConnection();
app.get("/", (req: Request, res: Response) => {
    res.send({ api: "api" })
})
app.use(apiRoutes);
app.use(authRoutes);
app.listen(PORT, () => {
    console.log('\x1b[32m', `Servidor rodando em http://localhost:${PORT}/`, '\x1b[0m');
})