"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Student {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield prisma.student.findMany());
            }
            catch (error) {
                res.status(404).send({ erro: error, mensage: "Ocorreu um erro!" });
            }
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(201).send(yield prisma.student.create({ data: req.body }));
            }
            catch (error) {
                res.status(409).send({ erro: error, mensage: "Ocorreu um erro!" });
            }
        });
    }
    ;
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield prisma.student.update({ data: req.body, where: { id: parseInt(req.params.id) } }));
            }
            catch (error) {
                res.status(404).send({ erro: error, mensage: "Ocorreu um erro!" });
            }
        });
    }
    ;
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield prisma.student.delete({ where: { id: parseInt(req.params.id) } }));
            }
            catch (error) {
                res.status(404).send({ erro: error, mensage: "Ocorreu um erro!" });
            }
        });
    }
    ;
}
exports.default = new Student;
