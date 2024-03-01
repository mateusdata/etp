import { Router } from "express";
const authRoutes = Router();


authRoutes.get("/",(req, res)=>{
    res.send("oiii")
})

export default authRoutes;
