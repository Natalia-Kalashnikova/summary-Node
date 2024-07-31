import { Router } from "express";
import { createStudentController, deleteStudentByIdController, getStudentByIdController, getStudentsController, patchStudentController } from "../controllers/students.js";
import { ctrWrapper } from "../utils/ctrlWrapper.js";

const studentsRouter = Router();

studentsRouter.get('/students', ctrWrapper(getStudentsController));

studentsRouter.get('/students/:studentId', ctrWrapper(getStudentByIdController));

studentsRouter.post('/students', ctrWrapper(createStudentController));

studentsRouter.patch('/students/:studentId', ctrWrapper(patchStudentController));

studentsRouter.delete('/students/:studentId', ctrWrapper(deleteStudentByIdController));


export default studentsRouter;


// import { Router } from "express";
// import {
//   getStudentsController,
//   getStudentByIdController,
//   createStudentController,
//   deleteStudentController,
//   upsertStudentController,
//   patchStudentController,
// } from "../controllers/students.js";
// import { ctrWrapper } from "../utils/ctrlWrapper.js";


// const studentsRouter = Router();

// studentsRouter.get('/students', ctrWrapper(getStudentsController));

// studentsRouter.get('/students/:studentId', (getStudentByIdController));

// studentsRouter.post('/students', ctrWrapper(createStudentController));

// studentsRouter.delete('/students/:studentId', ctrWrapper(deleteStudentController));

// studentsRouter.put('/students/:studentId', ctrWrapper(upsertStudentController));

// studentsRouter.patch('/students/:studentId', ctrWrapper(patchStudentController));

// export default studentsRouter;
