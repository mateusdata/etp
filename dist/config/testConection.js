"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
function hasConnection() {
    const prisma = new client_1.PrismaClient();
    prisma.$connect;
    prisma.$connect().then(() => {
        console.log("\x1b[32m", "Conexão com o banco estabelecida", "\x1b[0m");
    }).catch((error) => {
        console.error("\x1b[31m", "Erro ao conectar ao banco de dados:", error, "\x1b[0m");
    });
}
exports.default = hasConnection;
