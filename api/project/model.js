const db = require("../../data/dbConfig");
const { convertToBoolean } = require("../utils/boolean");

function mapProject(record) {
  return record
    ? { ...record, project_completed: convertToBoolean(record.project_completed) }
    : record;
}

async function getAll() {
  const projects = await db("projects");
  return projects.map(mapProject);
}

async function add(projectData) {
  const [id] = await db("projects").insert(projectData);
  const project = await db("projects").where({ project_id: id }).first();
  return mapProject(project);
}

module.exports = { getAll, add };
