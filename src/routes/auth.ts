import { Router } from "express";
import * as yup from "yup"
const authRoutes = Router();


authRoutes.post("/login", (req, res) => {
    const schema = yup.object({
        email: yup.string().email("email inválido"),
        password: yup.string().min(6, "a password tem que ter mais que 6 digito")
    });
    console.log(schema);
    res.send("vc esta logado");

});


authRoutes.get("/docker", (req, res) => {
    res.send("docker triste");
});


export default authRoutes;
