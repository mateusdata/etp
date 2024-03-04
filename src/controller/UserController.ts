import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import * as yup from "yup"
import prisma from "../config/prisma";


class User {

    public async create(req: Request, res: Response) {
        const schema = yup.object({
            name: yup.string().min(2, "Nome inválido").required(),
            email: yup.string().email("Email inválido").required(),
            password: yup.string().min(4, "Senha muito pequena").required()
        });

        try {
            res.status(201).send(await prisma.user.create({ data: await schema.validate(req.body)}));
        } catch (error) {
            console.log(error);
            res.status(400).json({ error, mensage: "Ocorreu um erro" })
        }
    }

}
export default new User;