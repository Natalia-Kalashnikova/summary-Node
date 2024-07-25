import { Router } from "express";
import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
} from "../controllers/students.js";
import { ctrWrapper } from "../utils/ctrlWrapper.js";


const studentsRouter = Router();

studentsRouter.get('/students', ctrWrapper(getStudentsController));

studentsRouter.get('/students/:studentId', (getStudentByIdController));

studentsRouter.post('/students', ctrWrapper(createStudentController));

studentsRouter.delete('/students/:studentId', ctrWrapper(deleteStudentController));

studentsRouter.put('/students/:studentId', ctrWrapper(upsertStudentController));

export default studentsRouter;
