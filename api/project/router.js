const router = require("express").Router();
const middleware = require("./middleware");
const Project = require("./model");

router.post("/", middleware.validateProjectData, (req, res, next) => {
  Project.add(req.projectData)
    .then((project) => res.status(201).json(project))
    .catch(next);
});

router.get("/", (req, res, next) => {
  Project.getAll()
    .then((projects) => res.status(200).json(projects ? projects : []))
    .catch(next);
});

module.exports = router;
