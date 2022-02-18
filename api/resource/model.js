const db = require("../../data/dbConfig");

async function getAll() {
  const resources = await db("resources");
  return resources;
}

async function add(resourceData) {
  const [id] = await db("resources").insert(resourceData);
  const resource = await db("resources").where({ resource_id: id }).first();
  return resource;
}

module.exports = { getAll, add };
