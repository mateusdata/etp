import { Router } from "express";
import StudentController from "../controller/StudentController";
import ConversationController from "../controller/ConversationController";
const apiRoutes = Router();

apiRoutes.get('/index', StudentController.index)
apiRoutes.post('/create', StudentController.create);
apiRoutes.delete("/delete/:id", StudentController.delete)
apiRoutes.put("/update/:id", StudentController.update)

apiRoutes.post('/create-conversation', ConversationController.create);




export default apiRoutes;
