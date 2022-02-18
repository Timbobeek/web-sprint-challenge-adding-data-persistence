const db = require("../../data/dbConfig");

function mapProject(record) {
  return record
    ? { ...record, project_completed: Boolean(record.project_completed) }
    : record;
}

async function getProjects() {
  const projects = await db("projects as p");
  return projects.map(mapProject);
}

async function addProject(projectData) {
  const [id] = await db("projects").insert(projectData);
  const project = await db("projects").where({ project_id: id }).first();
  return mapProject(project);
}

module.exports = { getProjects, addProject };
