import { PrismaClient } from "@prisma/client";

export default function hasConnection () {
    const prisma = new PrismaClient();
    prisma.$connect;
    prisma.$connect().then(() => {
        console.log("\x1b[32m", "Conexão com o banco estabelecida", "\x1b[0m");
    }).catch((error: any) => {
        console.error("\x1b[31m", "Erro ao conectar ao banco de dados:", error, "\x1b[0m");
    });
}