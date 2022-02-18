const { convertToBoolean, isValidBoolean } = require("../utils/boolean");

const validateTaskData = async (req, res, next) => {
  const { project_id, task_description, task_completed } = req.body;
  if (!project_id) {
    next({ status: 400, message: "project_id is required" });
  } else if (!task_description) {
    next({ status: 400, message: "task_description is required" });
  } else if (task_completed && !isValidBoolean(task_completed)) {
    next({
      status: 400,
      message: "boolean or number is required for task_completed",
    });
  } else {
    req.taskData = {
      ...req.body,
      task_completed: convertToBoolean(req.body.task_completed),
    };
    next();
  }
};

module.exports = {
  validateTaskData,
};
