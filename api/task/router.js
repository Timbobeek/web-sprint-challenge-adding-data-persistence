const router = require("express").Router();
const middleware = require("./middleware");
const Task = require("./model");

router.post("/", middleware.validateTaskData, (req, res, next) => {
  Task.add(req.taskData)
    .then((task) => res.status(201).json(task))
    .catch(next);
});

router.get("/", (req, res, next) => {
  Task.getAll()
    .then((tasks) => res.status(200).json(tasks ? tasks : []))
    .catch(next);
});

module.exports = router;
