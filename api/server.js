const express = require('express')

const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api', projectsRouter, resourcesRouter, tasksRouter)

server.use('*', (req, res)=>{
  res.json({ api: 'working'})
})

module.exports = server;
