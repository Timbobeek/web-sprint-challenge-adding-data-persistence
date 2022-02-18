function getProjectById(project_id){
  return Promise.resolve(`nice project ${project_id}`)
}

function getProjects(){
  return Promise.resolve('here are all the projects')
}

module.exports = {getProjectById, getProjects}
