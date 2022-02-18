const validateResourceData = async (req, res, next) => {
  const { resource_name } = req.body;
  if (!resource_name) {
    next({ status: 400, message: "resource_name is required" });
  } else {
    req.resourceData = req.body;
    next();
  }
};

module.exports = {
  validateResourceData,
};
