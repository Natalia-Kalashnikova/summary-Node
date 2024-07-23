import { Router } from "express";
import { getAllStudents, getStudentById } from "../services/students.js";


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
