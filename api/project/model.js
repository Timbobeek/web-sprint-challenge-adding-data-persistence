const db = require('../../data/dbConfig')

async function getProjects(){
  const projectRows = await db('projects as p')
  return projectRows
}

module.exports = {getProjects}
