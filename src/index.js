import { startServer } from "./server";
import { initMongoDB } from './server.js';


const bootstrap = async () => {
    await initMongoDB();
    startServer();
};

bootstrap();
