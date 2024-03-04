import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../config/prisma";


class Student {
  
  public async index(req: Request, res: Response) {
    try {
      res.send(await prisma.student.findMany())
    } catch (error) {
      res.status(404).send({ erro: error, mensage: "Ocorreu um erro!" })
    }
  };

  public async create(req: Request, res: Response) {
    try {
      res.status(201).send(await prisma.student.create({ data: req.body }));
    } catch (error) {
      res.status(409).send({ erro: error, mensage: "Ocorreu um erro!" })
    }
  };

  public async update(req: Request, res: Response) {
    try {
      res.send(await prisma.student.update({ data: req.body, where: { id: parseInt(req.params.id) } }))
    } catch (error) {
      res.status(404).send({ erro: error, mensage: "Ocorreu um erro!" })
    }
  };

  public async delete(req: Request, res: Response) {
    try {
      res.send(await prisma.student.delete({ where: { id: parseInt(req.params.id) } }))
    } catch (error) {
      res.status(404).send({ erro: error, mensage: "Ocorreu um erro!" })
    }
  };

}
export default new Student;