// **SUMMARY-CODE** 4
import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";

export const isValidId = (req, res, next) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
                throw createHttpError(404, 'Not found');
            }
            next();
        };


// import { isValidObjectId } from "mongoose";
// import createHttpError from "http-errors";

// export const isValidId = (req, res, next) => {
//         const { id } = req.params;
//         if (!isValidObjectId(id)) {
//                 throw createHttpError(404, 'Not found');
//             }
//             next();
//         };


