// To avoid having try catch written everywhere
// Returns a reference to a function
// factory function 
module.exports = function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    }
    catch (ex) {
      next(ex);
    }
  };
}