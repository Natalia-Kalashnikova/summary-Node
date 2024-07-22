// import { startServer } from "./server.js";
// import { initMongoDB } from './db/initMongoDB.js';

// const bootstrap = async () => {
//     await initMongoDB();
//     startServer();
// };

// bootstrap();

import { initMongoConnection } from "./db/initMongoConnection.js";
import { Student } from "./db/models/student.js";
import { startServer } from "./server.js";

(async () => {
    await initMongoConnection();
    const students = await Student.find({});
    console.log(students);
    startServer();
})();

