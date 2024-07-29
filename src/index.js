import { initMongoConnection } from './db/initMongoConnection.js';
import { startServer } from './server.js';

(async () => {
  await initMongoConnection();
  startServer();
})();

// import { initMongoConnection } from "./db/initMongoConnection.js";
// import { Student } from "./db/models/student.js";
// import { startServer } from "./server.js";

// (async () => {
//     await initMongoConnection();
//     const students = await Student.find({});
//     console.log(students);
//     startServer();
// })();

