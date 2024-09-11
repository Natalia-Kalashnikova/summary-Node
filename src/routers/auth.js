// **SUMMARY-CODE** 5

// import { Router } from "express";
// import { validateBody } from '../middlewares/validateBody.js';




// **SUMMARY-CODE** 6

import { Router } from "express";
import { validateBody } from '../middlewares/validateBody.js';
import {ctrWrapper } from '../middlewares/ctrlWrapper.js';
import {
    LoginUserSchema,
    registerUserSchema,
    requestResetEmailSchema,
    resetPasswordSchema
} from "../validation/auth.js";
import {
    loginUserController,
    logoutUserController,
    refreshUserSessionController,
    registerUserController,
    requestResetEmailController,
    resetPasswordController
} from "../controllers/auth.js";


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

router.post(
    '/request-reset-email',
    validateBody(requestResetEmailSchema),
    ctrWrapper(requestResetEmailController),
);

router.post(
    '/reset-password',
    validateBody(resetPasswordSchema),
    ctrWrapper(resetPasswordController),
);

export default router;
