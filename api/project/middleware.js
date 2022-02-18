const { convertToBoolean, isValidBoolean } = require("../utils/boolean");

const validateProjectData = async (req, res, next) => {
  const { project_name, project_completed } = req.body;
  if (!project_name) {
    next({ status: 400, message: "project_name is required" });
  } else if (project_completed && !isValidBoolean(project_completed)) {
    next({
      status: 400,
      message: "boolean or number is required for project_completed",
    });
  } else {
    req.projectData = {
      ...req.body,
      project_completed: convertToBoolean(req.body.project_completed),
    };
    next();
  }
};

module.exports = {
  validateProjectData,
};
