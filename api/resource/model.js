const db = require('../../data/dbConfig')

async function getResources(){
  const projectRows = await db('resources as r')
  return projectRows
}

module.exports = {getResources}
