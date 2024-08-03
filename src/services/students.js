import createHttpError from 'http-errors';
import { Student } from '../db/models/student.js';
import { calculatePaginationData } from '../utils/alculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';


export const getAllStudents = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy='_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const studentsQuery = Student.find();
  const studentsCount = await Student.find()
    .merge(studentsQuery)
    .countDocuments();

  const students = await
    studentsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder})
      .exec();

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
