// **SUMMARY-CODE** 6

import {
    createStudent,
    deleteStudentById,
    getAllStudents,
    getStudentById,
    upsertStudent
} from "../services/students.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { saveFileToUploadDir } from "../utils/saveFileToUploadDir.js";
import createHttpError from "http-errors";
import { env } from '../utils/env.js';
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";


export const getStudentsController = async (req, res) => {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseSortParams(req.query);
    const filter = parseFilterParams(req.query);

    const students = await getAllStudents({
        page,
        perPage,
        sortBy,
        sortOrder,
        filter,
    });

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
    const student = await createStudent(body, req.user._id);

    res.status(201).json({
        status: 201,
        message: `Successfully created student`,
        data: student,
    });
};

export const patchStudentController = async (req, res, next) => {
    // const { body } = req;
    const {studentId} = req.params;
    // const student = await upsertStudent(studentId, body);
    const photo = req.file;

    let photoUrl;

    if (photo) {
        if (env('ENABLE_CLOUDINARY') === 'true') {
            photoUrl = await saveFileToCloudinary(photo);
        } else {
            photoUrl = await saveFileToUploadDir(photo);
        }
    }

    const result = await upsertStudent(studentId, {
        ...req.body,
        photo: photoUrl,
    });

    if (!result) {
        next(createHttpError(404, 'Student not found'));
        return;
    }

    res.status(200).json({
        status: 200,
        message: `Successfully patched student`,
        data: result.student,
    });
};

export const putStudentController = async (req, res) => {
    const { body } = req;
    const {studentId} = req.params;
    const { isNew, student } = await upsertStudent(studentId, body, { upsert: true });

    const status = isNew ? 201 : 200;
    res.status(status).json({
        status,
        message: `Successfully upserted student`,
        data: student,
    });
};

export const deleteStudentByIdController = async (req, res) => {
    const id = req.params.studentId;
    await deleteStudentById(id);
    res.status(204).send();
};
