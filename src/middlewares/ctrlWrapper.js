// **SUMMARY-CODE**
// **WEBINAR-CODE**

export const ctrWrapper = (controller) => async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
        next(error);
    }
};

