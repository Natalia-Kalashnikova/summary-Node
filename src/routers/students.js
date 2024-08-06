// import { Router } from "express";
// import {
//     createStudentController,
//     deleteStudentByIdController,
//     getStudentByIdController,
//     getStudentsController,
//     patchStudentController,
//     putStudentController
// } from "../controllers/students.js";
// import { ctrWrapper } from "../middlewares/ctrlWrapper.js";
// import { validateBody } from "../middlewares/validateBody.js";
// import { createStudentSchema, updateStudentSchema } from "../validation/students.js";
// import { isValidId } from "../middlewares/isValidId.js";


// const studentsRouter = Router();

// studentsRouter.get('/students', ctrWrapper(getStudentsController));

// studentsRouter.get('/students/:studentId', isValidId, ctrWrapper(getStudentByIdController));

// studentsRouter.post('/students', validateBody(createStudentSchema), ctrWrapper(createStudentController));

// studentsRouter.patch('/students/:studentId', isValidId, validateBody(updateStudentSchema), ctrWrapper(patchStudentController));

// studentsRouter.put('/students/:studentId', isValidId, validateBody(createStudentSchema), ctrWrapper(putStudentController));

// studentsRouter.delete('/students/:studentId', isValidId, ctrWrapper(deleteStudentByIdController));


// export default studentsRouter;



// import { Router } from "express";
// import {
//     createStudentController,
//     deleteStudentByIdController,
//     getStudentByIdController,
//     getStudentsController,
//     patchStudentController,
//     putStudentController
// } from "../controllers/students.js";
// import { ctrWrapper } from "../middlewares/ctrlWrapper.js";


// const studentsRouter = Router();
// studentsRouter.get('/students', ctrWrapper(getStudentsController));
// studentsRouter.get('/students/:studentId', ctrWrapper(getStudentByIdController));
// studentsRouter.post('/students', ctrWrapper(createStudentController));

// studentsRouter.patch('/students/:studentId', ctrWrapper(patchStudentController));

// studentsRouter.put('/students/:studentId', ctrWrapper(putStudentController));

// studentsRouter.delete('/students/:studentId', ctrWrapper(deleteStudentByIdController));


// export default studentsRouter;


import { Router } from "express";
import {
    createStudentController,
    deleteStudentByIdController,
    getStudentByIdController,
    getStudentsController,
    patchStudentController,
    putStudentController
} from "../controllers/students.js";
import { ctrWrapper } from "../middlewares/ctrlWrapper.js";
import { isValidId } from "../middlewares/isValidId.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createStudentSchema } from "../validation/createStudentSchema.js";


const studentsRouter = Router();

studentsRouter.use('/students/:studentId', isValidId('studentId'));

studentsRouter.get('/students', ctrWrapper(getStudentsController));

studentsRouter.get('/students/:studentId', ctrWrapper(getStudentByIdController));

studentsRouter.post('/students', validateBody(createStudentSchema), ctrWrapper(createStudentController));

studentsRouter.patch('/students/:studentId', ctrWrapper(patchStudentController));

studentsRouter.put('/students/:studentId', ctrWrapper(putStudentController));

studentsRouter.delete('/students/:studentId', ctrWrapper(deleteStudentByIdController));


export default studentsRouter;
