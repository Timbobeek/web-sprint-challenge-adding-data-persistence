const db = require("../../data/dbConfig");
const { convertToBoolean } = require("../utils/boolean");

function mapTask(record) {
  return record
    ? { ...record, task_completed: convertToBoolean(record.task_completed) }
    : record;
}

async function getAll() {
  const tasks = await db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description");
  return tasks.map(mapTask);
}

async function add(taskData) {
  const [id] = await db("tasks").insert(taskData);
  const task = await db("tasks").where({ task_id: id }).first();
  return mapTask(task);
}

module.exports = { getAll, add };
