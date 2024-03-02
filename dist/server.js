"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = __importDefault(require("ws"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./routes/api"));
const auth_1 = __importDefault(require("./routes/auth"));
const testConection_1 = __importDefault(require("./config/testConection"));
const websocks_1 = require("./routes/websocks");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, testConection_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.default.Server({ server });
(0, websocks_1.handleWebSocket)(wss);
app.get("/", (req, res) => {
    res.send({ api: "api v1" });
});
app.use(api_1.default);
app.use(auth_1.default);
server.listen(PORT, () => {
    console.log('\x1b[32m', `Servidor rodando em http://localhost:${PORT}/`, '\x1b[0m');
});
