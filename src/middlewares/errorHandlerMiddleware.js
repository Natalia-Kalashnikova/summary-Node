import {HttpError} from "http-errors";

export const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({
    status: error.status,
    message: error.message,
  });
}

  res.status(500).json({
    status: 500,
    message: "Internal server error",
    data: {
      message: error.message,
    }
  });
};

// import { HttpError } from 'http-errors';

// export const errorHandlerMiddleware = (error, req, res, next) => {
//   if (error instanceof HttpError) {
//     res.status(error.status).json({
//       status: error.status,
//       message: error.name,
//       data: error,
//     });
//     return;
//   }

//   res.status(500).json({
//     status: 500,
//     message: 'Something went wrong',
//     data: error.message,
//   });
// };


