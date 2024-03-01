import { Router } from "express";
import Student from "../Controller/StudentController";
const apiRoutes = Router();

apiRoutes.get('/index', Student.index)
apiRoutes.post('/create', Student.create);
apiRoutes.delete("/delete/:id", Student.delete)
apiRoutes.put("/update/:id", Student.update)

export default apiRoutes;
