import { Router } from "express";
import * as yup from "yup"
import UserController from "../controller/UserController";
const authRoutes = Router();


authRoutes.post("/create-acount", UserController.create);




export default authRoutes;
