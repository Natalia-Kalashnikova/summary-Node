import { Router } from "express";
import { validateBody } from '../middlewares/validateBody.js';
import {ctrWrapper } from '../middlewares/ctrlWrapper.js';
import { registerUserSchema } from "../validation/auth.js";
import { registerUserController } from "../controllers/auth.js";

const router = Router();

router.post(
    '/register',
    validateBody(registerUserSchema),
    ctrWrapper(registerUserController),
);

export default router;
