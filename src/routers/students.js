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
import { validateBody } from "../middlewares/validateBody.js";
import { createStudentSchema, updateStudentSchema } from "../validation/students.js";
import { isValidId } from "../middlewares/isValidId.js";


const studentsRouter = Router();

studentsRouter.get('/', ctrWrapper(getStudentsController));

studentsRouter.get('/:studentId',
    isValidId,
    ctrWrapper(getStudentByIdController)
);

studentsRouter.post(
    '/register',
    validateBody(createStudentSchema),
    ctrWrapper(createStudentController)
);

studentsRouter.delete(
    '/:studentId',
    isValidId,
    ctrWrapper(deleteStudentByIdController)
);

studentsRouter.put(
    '/:studentId',
    isValidId,
    validateBody(createStudentSchema),
    ctrWrapper(putStudentController)
);

studentsRouter.patch(
    '/:studentId',
    isValidId,
    validateBody(updateStudentSchema),
    ctrWrapper(patchStudentController)
);


export default studentsRouter;


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
// import { isValidId } from "../middlewares/isValidId.js";
// import { validateBody } from "../middlewares/validateBody.js";
// import { createStudentSchema } from "../validation/createStudentSchema.js";
// import { updateStudentSchema } from "../validation/updateStudentSchema.js";


// const studentsRouter = Router();

// studentsRouter.use('/students/:studentId', isValidId('studentId'));

// studentsRouter.get('/students', ctrWrapper(getStudentsController));

// studentsRouter.get('/students/:studentId', ctrWrapper(getStudentByIdController));

// studentsRouter.post('/students', validateBody(createStudentSchema), ctrWrapper(createStudentController));

// studentsRouter.patch('/students/:studentId', validateBody(updateStudentSchema), ctrWrapper(patchStudentController));

// studentsRouter.put('/students/:studentId', validateBody(createStudentSchema), ctrWrapper(putStudentController));

// studentsRouter.delete('/students/:studentId', ctrWrapper(deleteStudentByIdController));


// export default studentsRouter;
