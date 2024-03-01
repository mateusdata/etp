import express, { Request, Response, json } from 'express'
import { Router } from 'express';
import Person from './Controller/Person';
import dotenv from 'dotenv';
import {PrismaClient} from "@prisma/client"


dotenv.config();
const PORT = 3000
const app = express();
const prisma = new PrismaClient();
prisma.$connect
const route = Router()

app.use(express.json())

prisma.$connect().then(() => {
    console.log("\x1b[32m", "Conexão com o banco estabelecida", "\x1b[0m");
}).catch((error:any) => {
    console.error("\x1b[31m", "Erro ao conectar ao banco de dados:", error, "\x1b[0m");
});

route.get('/ss', Person.getName)

route.post('/create', async (req: Request,res: Response)=>{
    try {
        res.send(await prisma.student.create({data:req.body}));
    } catch (error) {
        res.status(404).send( {erro:error, mensage:"ocooreu um erro"})
    }
})

route.get("/", async(req: Request,res: Response)=>{
    try {
        res.send(await prisma.student.findMany())
    } catch (error) {
        res.status(404).send( {erro:error, mensage:"ocooreu um erro"})
    }
});


route.delete("/delete/:id", async (req:Request, res:Response)=>{

    try {
        res.send( await prisma.student.delete({where:{id: parseInt(req.params.id)}}))
    } catch (error) {
        res.status(404).send( {erro:error, mensage:"ocooreu um erro"})
    }
});
route.put("/update/:id", async (req:Request, res:Response)=>{
    try {
        res.send(await prisma.student.update({data:req.body, where:{id:parseInt(req.params.id)}}))
    } catch (error) {
        res.status(404).send( {erro:error, mensage:"ocooreu um erro"})
    }
})

app.use(route)


app.listen(PORT, () => {
    console.log('\x1b[32m', `Servidor rodando em http://localhost:${PORT}/`, '\x1b[0m');
})