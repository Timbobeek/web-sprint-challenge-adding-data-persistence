const router = require('express').Router()
const Task = require('./model')


router.get('/tasks', (req,res,next)=>{
  Task.getTasks()
    .then(tasks => {
      if(!tasks){
        res.status(200).json([])}
      else{
        res.status(200).json(tasks)
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
