import { createStudent, deleteStudentById, getAllStudents, getStudentById, upsertStudent } from "../services/students.js";


export const getStudentsController = async (req, res) => {
    const students = await getAllStudents();
    res.json({
        status: 200,
        message: 'Successfully get all students!',
        data: students,
    });
};

export const getStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
    const student = await getStudentById(id);


    res.json({
        status: 200,
        message: `Successfully get student with id ${id}!`,
        data: student,
    });
};

export const createStudentController = async (req, res) => {
    const {body} = req;
    const student = await createStudent(body);

    res.status(201).json({
        status: 201,
        message: `Successfully created student`,
        data: student,
    });
};

export const patchStudentController = async (req, res) => {
    const { body } = req;
    const {studentId} = req.params;
    const student = await upsertStudent(studentId, body);

    res.status(200).json({
        status: 200,
        message: `Successfully patched student`,
        data: student,
    });
};

export const deleteStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
    await deleteStudentById(id);
    res.status(204).send();
};

// import { getAllStudents, getStudentById } from "../services/students.js";
// import createHttpError from "http-errors";
// import { createStudent } from "../services/students.js";
// import { deleteStudent } from "../services/students.js";
// import { updateStudent } from "../services/students.js";


// export const createStudentController = async (req, res) => {
//     const student = await createStudent(req.body);

//     res.status(201).json({
//         status: 201,
//         message: 'Successfully created a student!',
//         data: student,
//     });
// };

// export const getStudentsController = async (req, res) => {
//     const students = await getAllStudents();

//     res.json({
//         status: 200,
//             message: 'Successfully get all students!',
//                 data: students,
//     });
// };

// export const getStudentByIdController = async (req, res, next) => {
//     const id = req.params.studentId;
//     const student = await getStudentById(id);

//     if (!student) {
//         throw createHttpError(404,`Student with id ${id} not found!`);
//     }

//     res.json({
//       status: 200,
//       message: `Successfully get student with id ${id}!`,
//       data: student,
//     });
// };

// export const deleteStudentController = async (req, res, next) => {
//     const { studentId } = req.params;
//     const student = await deleteStudent(studentId);

//     if (!student) {
//         next(createHttpError(404, 'Student not found'));
//         return;
//     }
//     res.status(204).send();
// };

// export const upsertStudentController = async (req, res, next) => {
//     const { studentID } = req.params;

//     const result = await updateStudent(studentID, req.body, {
//         upsert: true,
//     });

//     if (!result) {
//         next(createHttpError(404, 'Student not found'));
//         return;
//     }

//     const status = result.isNew ? 201 : 200;

//     res.status(status).json({
//         status,
//         message: `Successfully upserted a student!`,
//         data: result.student,
//     });
// };

// export const patchStudentController = async (req, res, next) => {
//     const { studentId } = req.params;
//     const result = await updateStudent(studentId, req.body);

//     if (!result) {
//         next(createHttpError(404, 'Student not found'));
//         return;
//     }

//     res.json({
//         status: 200,
//         message: 'Successfully patched a student!',
//         date: result.student,
//     });
// };
