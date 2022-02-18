const router = require("express").Router();
const middleware = require("./middleware");
const Resource = require("./model");

router.post("/", middleware.validateResourceData, (req, res, next) => {
  Resource.add(req.resourceData)
    .then((resource) => res.status(201).json(resource))
    .catch(next);
});

router.get("/", (req, res, next) => {
  Resource.getAll()
    .then(resources => res.status(200).json(resources ? resources : []))
    .catch(next);
});

module.exports = router;
