// **SUMMARY-CODE** 4-5

export const ctrWrapper = (controller) =>async(req, res, next)=> {
    try {
      await controller(req, res, next);
    } catch (error) {
        next(error);
    }
};
