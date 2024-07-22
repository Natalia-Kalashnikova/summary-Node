// import express from 'express';
// import pino from 'pino-http';
// import cors from 'cors';
// import { env } from './utils/env';
// import { getAllStudents, getStudentsById } from './services/students.js';


// const PORT = Number(env('PORT', '3000'));

// export const startServer = () => {
//     const app = express();

//     app.use(express.json());

//     app.use(cors());

//     app.use(
//         pino({
//             transport: {
//                 target: 'pino-pretty',
//             },
//         }),
//     );

//     // app.use((req, res, next) => {
//     //     console.log(`Time: ${new Date().toLocaleString()}`);
//     //     next();
//     // });

//     app.get('/students', async (req, res) => {
//         const students = await getAllStudents();

//         res.status(200).json({
//             data: students,
//         });
//     });

//     app.get('/students/:studentId', async (req, res, next) => {
//         const { studentId } = req.params;
//         const student = await getStudentsById(studentId);

//         if (!student) {
//             res.status(404).json({
//                 message: 'Student not found'
//             });
//             return;
//         }
//         res.status(200).json({
//             data: student,
//         });
//     });

//     app.get('/', (req, res) => {
//         res.json({ message: 'Hello world!' });
//     });

//         app.use('*', (req, res, next) => {
//         res.status(404).json({
//             message: 'Not found',
//         });
//     });

//     app.use((req, res, next, err) => {
//         res.status(500).json({
//             message: 'Something went wrong',
//             error: err.message,
//         });
//     });

//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// };

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js';
import { getAllStudents } from './services/students.js';


export const startServer = () => {
    const app = express();

    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            },
        }),
    );

    app.use(cors());

    app.get('/students', async(req, res, next) => {
    const students = await getAllStudents()
        res.json({
            status: 200,
            message: 'Successfully get all students!',
            data: students,
        });
});

//     add.get('/students/:studentId', req.res, next)=> {

// };

    // app.get('/world', (req, res) => {
    //     res.send('Hello world');
    // });

    // app.get('/error', (req, res, next) => {
    //     next(new Error('some error here'));
    // });

    app.use(notFoundMiddleware);

    app.use(errorHandlerMiddleware);

    const PORT = env(ENV_VARS.PORT, 3000);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

