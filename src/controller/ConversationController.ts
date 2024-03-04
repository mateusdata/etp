import { Request, Response } from "express";
import * as yup from "yup"
import prisma from "../config/prisma";

class Conversation {
    public async create(req:Request, res:Response){
        const schema = yup.object({
            id_usu1: yup.number().required("Id do usuario um é obrigarotio").required(),
            id_usu2: yup.number().required("Id do usuario um é obrigarotio").required(),
        });
    
        try {
            const { id_usu1, id_usu2 } = await schema.validate(req.body, { abortEarly: false });
            res.status(201).send(await prisma.conversa.create({
                data: {
                    id_usu1: { connect: { id: id_usu1 } },
                    id_usu2: { connect: { id: id_usu2 } }
                }
            }));
            
        } catch (error) {
            console.log(error)
            res.status(400).json({ error, message: "Ocorreu um erro" })
        }
    }
    
} 

export default new Conversation;