  // **SUMMARY-CODE!!** 4-5

// import { initMongoConnection } from './db/initMongoConnection.js';
// import { startServer } from './server.js';

// (async () => {
//   await initMongoConnection();
//   startServer();
// })();


  // **SUMMARY-CODE!!** 6

import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { startServer } from './server.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  startServer();
};

void bootstrap();



