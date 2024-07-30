import createHttpError from 'http-errors';
import { Student } from '../db/models/student.js';

export const getAllStudents = async () => {
    return await Student.find();
};

export const getStudentById = async (id) => {
  const student = await Student.findById(id);

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  return student;
};

// import { Student } from '../db/models/student.js';


// export const getAllStudents = async () => {
//   return await Student.find();
// };

// export const getStudentById = async (id) => {
//   return await Student.findById(id);
// };

// export const createStudent = async (payload) => {
//   const student = await Student.create(payload);
//   return student;
// };

// export const deleteStudent = async (studentId) => {
//   const student = await Student.findOneAndDelete({
//     _id: studentId,
//   });
//   return student;
// };

// export const updateStudent = async (studentId, payload, options = {}) => {
//   const rawResult = await Student.findOneAndUpdate(
//     { _id: studentId },
//     payload,
//     {
//       new: true,
//       includeResultMetadata: true,
//       ...options,
//     },
//   );

//   if (!rawResult || !rawResult.value) return null;

//   return {
//     student: rawResult.value,
//     isNew: Boolean(rawResult?.lastErrorObject?.upserted),
//   };
// };
