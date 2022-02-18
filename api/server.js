const express = require("express");

const projectsRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const tasksRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
// server.use("/api/resources", resourcesRouter);
// server.use("/api/tasks", tasksRouter);

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    sageAdvice: 'Finding the real error is 90% of the bug fix',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
