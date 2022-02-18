const router = require('express').Router()
const Project = require('./model')

// for testing
router.get('/projects/:project_id', (req,res,next)=>{
  Project.getProjectById(req.params.project_id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(next)
})


// part of assignment
router.get('/projects', (req,res,next)=>{
  Project.getProjects()
    .then(projects => {
      if(!projects){
        res.status(200).json([])}
      else{
        res.status(200).json(projects)
      }
    })
    .catch(next)
})




router.use((err, req, res, next)=>{ // eslint-disable-line
  res.status(500).json({
    customMessage: 'something went wrong ;(',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
