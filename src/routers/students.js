// **SUMMARY-CODE** 4

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

// studentsRouter.get('/students-summary', ctrWrapper(getStudentsController));

// studentsRouter.get('/students-summary/:studentId', isValidId, ctrWrapper(getStudentByIdController));

// studentsRouter.post('/students-summary', validateBody(createStudentSchema), ctrWrapper(createStudentController));

// studentsRouter.patch('/students-summary/:studentId', isValidId, validateBody(updateStudentSchema), ctrWrapper(patchStudentController));

// studentsRouter.put('/students-summary/:studentId', isValidId, validateBody(createStudentSchema), ctrWrapper(putStudentController));

// studentsRouter.delete('/students-summary/:studentId', isValidId, ctrWrapper(deleteStudentByIdController));

// export default studentsRouter;


// **SUMMARY-CODE** 5

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
// import { authenticate } from "../middlewares/authenticate.js";
// import { checkRoles } from "../middlewares/checkRoles.js";
// import { ROLES } from "../constants/index.js";


// const studentsRouter = Router();

// studentsRouter.get(
//     '/',
//     checkRoles(ROLES.TEACHER),
//     ctrWrapper(getStudentsController));

// studentsRouter.get(
//     '/:studentId',
//     checkRoles(ROLES.TEACHER, ROLES.PARENT),
//     isValidId,
//     ctrWrapper(getStudentByIdController)
// );

// studentsRouter.post(
//     '/',
//     checkRoles(ROLES.TEACHER),
//     validateBody(createStudentSchema),
//     ctrWrapper(createStudentController)
// );

// studentsRouter.delete(
//     '/:studentId',
//     checkRoles(ROLES.TEACHER),
//     isValidId,
//     ctrWrapper(deleteStudentByIdController)
// );

// studentsRouter.put(
//     '/:studentId',
//     checkRoles(ROLES.TEACHER),
//     isValidId,
//     validateBody(createStudentSchema),
//     ctrWrapper(putStudentController)
// );

// studentsRouter.patch(
//     '/:studentId',
//     checkRoles(ROLES.TEACHER),
//     isValidId,
//     validateBody(updateStudentSchema),
//     ctrWrapper(patchStudentController)
// );

// studentsRouter.use(authenticate);

// studentsRouter.get('/', ctrWrapper(getStudentsController));





// **SUMMARY-CODE** 6

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
import { authenticate } from "../middlewares/authenticate.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES } from "../constants/index.js";
import { upload } from "../middlewares/multer.js";


const studentsRouter = Router();

studentsRouter.get(
    '/',
    checkRoles(ROLES.TEACHER),
    ctrWrapper(getStudentsController));

studentsRouter.get(
    '/:studentId',
    checkRoles(ROLES.TEACHER, ROLES.PARENT),
    isValidId,
    ctrWrapper(getStudentByIdController),
);

studentsRouter.post(
    '/',
    checkRoles(ROLES.TEACHER),
    isValidId,
    upload.single('photo'),
    validateBody(createStudentSchema),
    ctrWrapper(createStudentController),
);

studentsRouter.delete(
    '/:studentId',
    checkRoles(ROLES.TEACHER),
    isValidId,
    ctrWrapper(deleteStudentByIdController),
);

studentsRouter.put(
    '/:studentId',
    checkRoles(ROLES.TEACHER),
    isValidId,
    upload.single('photo'),
    validateBody(createStudentSchema),
    ctrWrapper(putStudentController),
);

studentsRouter.patch(
    '/:studentId',
    checkRoles(ROLES.TEACHER),
    isValidId,
    upload.single('photo'),
    validateBody(updateStudentSchema),
    ctrWrapper(patchStudentController),
);

studentsRouter.use(authenticate);

studentsRouter.get('/', ctrWrapper(getStudentsController));


export default studentsRouter;
