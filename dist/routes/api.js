"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StudentController_1 = __importDefault(require("../controller/StudentController"));
const apiRoutes = (0, express_1.Router)();
apiRoutes.get('/index', StudentController_1.default.index);
apiRoutes.post('/create', StudentController_1.default.create);
apiRoutes.delete("/delete/:id", StudentController_1.default.delete);
apiRoutes.put("/update/:id", StudentController_1.default.update);
exports.default = apiRoutes;
