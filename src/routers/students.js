import { Router } from "express";
import { getStudentByIdController, getStudentsController } from "../controllers/students.js";

const studentsRouter = Router();

  studentsRouter.get('/students', getStudentsController);

  studentsRouter.get('/students/:studentId', getStudentByIdController);

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
