// **SUMMARY-CODE** 4-5

export const notFoundMiddleware = (req, res) => {
  res.status(404).send('Oops! Route was not found!');
};
