export const ctrWrapper = (controller) =>async(req, res, next)=> {
    try {
      await controller(req, res, next);
    } catch (error) {
        next(error);
    }
};

// export const ctrWrapper = (controller) => {
//     return async (req, res, next) => {
//         try {
//             await controller(req, res, next);
//         } catch (err) {
//             next(err);
//         }
//     };
// };
