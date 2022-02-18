const router = require('express').Router()
const Resource = require('./model')


router.get('/resources', (req,res,next)=>{
  Resource.getResources()
    .then(resources => {
      if(!resources){
        res.status(200).json([])}
      else{
        res.status(200).json(resources)
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
