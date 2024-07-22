// import { model, Schema } from 'mongoose';

// const studentsSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         age: {
//             type: Number,
//             required: true,
//         },
//         gender: {
//             type: String,
//             required: true,
//             enum: ['male', 'female', 'other'],
//         },
//         avgMark: {
//             type: Number,
//             required: true,
//         },
//         onDuty: {
//             type: Boolean,
//             required: true,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//         versionKey: false,
//     },
// );

// export const StudentsCollection = model('students', studentsSchema);

import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum:['male', 'female', 'other'],
    },
    avgMark: {
        type: Number,
        required: true,
        min: 1,
        max: 12,
    },
    onDuty: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
        versionKey: false,
    },
);

export const Student = model('students', studentSchema);
