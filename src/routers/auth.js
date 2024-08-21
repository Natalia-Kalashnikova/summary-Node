// **SUMMARY-CODE** 5

import { Router } from "express";
import { validateBody } from '../middlewares/validateBody.js';
import {ctrWrapper } from '../middlewares/ctrlWrapper.js';
import { LoginUserSchema, registerUserSchema } from "../validation/auth.js";
import { loginUserController, logoutUserController, refreshUserSessionController, registerUserController } from "../controllers/auth.js";

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

router.post(
    '/logout',
    ctrWrapper(logoutUserController),
);

router.post(
    '/refresh',
    ctrWrapper(refreshUserSessionController),
);

export default router;

