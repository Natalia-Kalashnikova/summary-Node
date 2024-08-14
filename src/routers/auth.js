import { Router } from "express";
import { validateBody } from '../middlewares/validateBody.js';
import {ctrWrapper } from '../middlewares/ctrlWrapper.js';
import { LoginUserSchema, registerUserSchema } from "../validation/auth.js";
import { loginUserController, registerUserController } from "../controllers/auth.js";

const router = Router();

router.post(
    '/register',
    validateBody(registerUserSchema),
    ctrWrapper(registerUserController),
);

router.post(
    '/login',
    validateBody(LoginUserSchema),
    ctrWrapper(loginUserController),
);

export default router;
