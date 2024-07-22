// import { StudentsCollection } from "../db/models/student.js";


// export const getAllStudents = async () => {
//     const students = await StudentsCollection.find();
//     return students;
// };

// export const getStudentsById = async (studentId) => {
//     const student = await StudentsCollection.findById(studentId);
//     return student;
// };

import { Student } from "../db/models/student.js";

export const getAllStudents = async() => {
    return await Student.find({});
};
