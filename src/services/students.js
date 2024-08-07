// import createHttpError from 'http-errors';
// import { Student } from '../db/models/student.js';
// import { calculatePaginationData } from '../utils/сalculatePaginationData.js';
// import { SORT_ORDER } from '../constants/index.js';


// export const getAllStudents = async ({
//   page = 1,
//   perPage = 10,
//   sortOrder = SORT_ORDER.ASC,
//   sortBy = '_id',
//   filter={},
// }) => {
//   const limit = perPage;
//   const skip = (page - 1) * perPage;

//   const studentsQuery = Student.find();

//   if (filter.gender) {
//     studentsQuery.where('gender').equals(filter.gender);
//   }
//   if (filter.maxAge) {
//     studentsQuery.where('age').lte(filter.maxAge);
//   }
//   if (filter.maxAvgMark) {
//     studentsQuery.where('avgMark').gte(filter.minAvgMark);
//   }

//   const [studentsCount, students] = await Promise.all([
//     Student.find().merge(studentsQuery).countDocuments(),
//     studentsQuery
//       .skip(skip)
//       .limit(limit)
//       .sort({ [sortBy]: sortOrder })
//       .exec(),
//   ]);

//   const paginationData = calculatePaginationData(studentsCount, perPage, page);

//   return {
//     data: students,
//     ...paginationData,
//   };
// };

// export const getStudentById = async (id) => {
//   const student = await Student.findById(id);

//   if (!student) {
//     throw createHttpError(404, 'Student not found');
//   }

//   return student;
// };

// export const createStudent = async (payload) => {
//   const student = await Student.create(payload);

//   return student;
// };

// export const upsertStudent = async (id, payload, options = {}) => {
//   const rawResult = await Student.findByIdAndUpdate(id, payload, {
//     new: true,
//     includeResultMetadata: true,
//     ...options,
//   });

//   if (!rawResult || rawResult.value) {
//     throw createHttpError(404, 'Student not found');
//   }
//   return {
//     student: rawResult.value,
//     isNew: !rawResult?.lastErrorObject?.updatedExisting,
//   };
// };

// export const deleteStudentById = async (studentId) => {
//   await Student.findByIdAndDelete(studentId);
// };

// import createHttpError from 'http-errors';
// import { Student } from '../db/models/student.js';


// export const getAllStudents = async () => {
//     return await Student.find();
// };
// export const getStudentById = async (id) => {
//   const student = await Student.findById(id);
//   if (!student) {
//     throw createHttpError(404, 'Student not found');
//   }
//   return student;
// };

// export const createStudent = async (payload) => {
//   const student = await Student.create(payload);

//   return student;
// };

// export const upsertStudent = async (id, payload, options = {}) => {
//   const rawResult = await Student.findByIdAndUpdate(id, payload, {
//     new: true,
//     includeResultMetadata: true,
//     ...options,
//   });

//   if (!rawResult || rawResult.value) {
//     throw createHttpError(404, 'Student not found');
//   }

//     return {
//     student: rawResult.value,
//     isNew: !rawResult?.lastErrorObject?.updatedExisting,
//   };
// };

// export const deleteStudentById = async (studentId) => {
//   await Student.findByIdAndDelete(studentId);
// };


import createHttpError from 'http-errors';
import { Student } from '../db/models/student.js';

const createPaginationInformation = (page, perPage, count) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};

export const getAllStudents = async ({
  page = 1,
  perPage = 5,
  sortBy = '_id',
  sortOrder = 'asc',
}) => {
  const skip = perPage * (page - 1);

  const [studentsCount, students] = await Promise.all([
    Student.find().countDocuments(),
    Student.find().skip(skip).limit(perPage).sort({
      [sortBy]: sortOrder,
    }),
  ]);

  const paginationInformation = createPaginationInformation(
    page,
    perPage,
    studentsCount);

  return {
    students,
    ...paginationInformation,
  };
};

export const getStudentById = async (id) => {
  const student = await Student.findById(id);
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  return student;
};

export const createStudent = async (payload) => {
  const student = await Student.create(payload);

  return student;
};

export const upsertStudent = async (id, payload, options = {}) => {
  const rawResult = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult || rawResult.value) {
    throw createHttpError(404, 'Student not found');
  }

    return {
    student: rawResult.value,
    isNew: !rawResult?.lastErrorObject?.updatedExisting,
  };
};

export const deleteStudentById = async (studentId) => {
  await Student.findByIdAndDelete(studentId);
};

