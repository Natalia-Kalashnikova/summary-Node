// **SUMMARY-CODE** 4
import createHttpError from 'http-errors';
import { Student } from '../db/models/student.js';
import { calculatePaginationData } from '../utils/сalculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';


export const getAllStudents = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter={},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const studentsQuery = Student.find();

  if (filter.gender) {
    studentsQuery.where('gender').equals(filter.gender);
  }
  if (filter.maxAge) {
    studentsQuery.where('age').lte(filter.maxAge);
  }
  if (filter.minAge) {
    studentsQuery.where('age').gte(filter.minAge);
  }
  if (filter.maxAvgMark) {
    studentsQuery.where('avgMark').gte(filter.maxAvgMark);
  }
  if (filter.minAvgMark) {
    studentsQuery.where('avgMark').gte(filter.minAvgMark);
  }

  const [studentsCount, students] = await Promise.all([
    Student.find().merge(studentsQuery).countDocuments(),
    studentsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(studentsCount, perPage, page);

  return {
    data: students,
    ...paginationData,
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

// **SUMMARY-CODE** 5

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
//   if (filter.minAge) {
//     studentsQuery.where('age').gte(filter.minAge);
//   }
//   if (filter.maxAvgMark) {
//     studentsQuery.where('avgMark').gte(filter.maxAvgMark);
//   }
//   if (filter.minAvgMark) {
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

// // export const createStudent = async (payload) => {
// //   const student = await Student.create(payload);

// //   return student;
// // };

// export const createStudent = async (payload, userId) => {
//   const student = await Student.create({ ...payload, parentId: userId });

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

