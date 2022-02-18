const router = require("express").Router();
const middleware = require("./middleware");
const Project = require("./model");

router.post("/projects", middleware.validateProjectData, (req, res, next) => {
  Project.addProject(req.projectData)
    .then((project) => res.status(201).json(project))
    .catch(next);
});

router.get("/projects", (req, res, next) => {
  Project.getProjects()
    .then((projects) => res.status(200).json(projects ? projects : []))
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

module.exports = router;
