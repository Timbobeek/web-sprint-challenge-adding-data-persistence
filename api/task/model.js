const db = require('../../data/dbConfig')

async function getTasks(){
  const taskRows = await db('tasks as t')
  return taskRows
}

module.exports = {getTasks}
