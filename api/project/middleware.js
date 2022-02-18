const validateProjectData = async (req, res, next) => {
  const { project_name, project_completed } = req.body;
  if (!project_name) {
    next({ status: 400, message: "project_name is required" });
  } else if (
    project_completed &&
    project_completed !== "true" &&
    project_completed !== "false" &&
    typeof project_completed !== "number"
  ) {
    next({
      status: 400,
      message: "boolean or number is required for project_completed",
    });
  } else {
    const completed = req.body.project_completed;
    req.projectData = {
      ...req.body,
      project_completed: Boolean(
        typeof completed === "number" ? completed : completed === "true"
      ),
    };
    next();
  }
};

module.exports = {
  validateProjectData,
};
