import { Router } from "express";
import { getAllStudents, getStudentById } from '../services/students.js';

const studentsRouter = Router();

  studentsRouter.get('/students', async (req, res) => {
    const students = await getAllStudents();
    res.json({
      status: 200,
      message: 'Successfully get all students!',
      data: students,
    });
  });

  studentsRouter.get('/students/:studentId', async (req, res) => {
    const id = req.params.studentId;
    const student = await getStudentById(id);

    if (!student) {
      return res.status(404).json({
        status: 404,
        message: `Student with id ${id} not found!`,
      });
    }

    res.json({
      status: 200,
      message: `Successfully get student with id ${id}!`,
      data: student,
    });
  });

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
