const express = require('express')

const projectsRouter = require('./project/router')

const server = express()

server.use(express.json())

server.use('/api', projectsRouter)

server.use('*', (req, res)=>{
  res.json({ api: 'working'})
})

module.exports = server;
