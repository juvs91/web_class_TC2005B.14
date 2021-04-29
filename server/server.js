// const express = require('express')
import express from 'express'
const app = express()
// const cors = require('cors')
import cors from 'cors'
// const cookieParser = require('cookie-parser')
import cookieParser from 'cookie-parser'

app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
  extended: true
}))

let processParams = (req) => {
  return Object.assign({}, req.body, req.params, req.query)
}

let init_endpoints = (app, employeeController) => {
  app.get('/get/:id', (req, resp) => {
    console.log(req.query)
    resp.send({message: "message value"})
  })
  app.post('/post/:id', (req, resp) => {
    console.log(req.query)
    resp.send({message: "message value"})
  })
  app.post('/employee', async (req, resp) => {
    let result = await employeeController.get(processParams(req))
    resp.send(result)
  })
  app.put('/put/:id', (req, resp) => {
    console.log(req.query)
    resp.send({message: "message value"})
  })
  app.patch('/patch/:id', (req, resp) => {
    console.log(req.query)
    resp.send({message: "message value"})
  })
  app.delete('/delete/:id', (req, resp) => {
    console.log(req.query)
    resp.send({message: "message value"})
  })
}

let init_app = (app, port) => {
  return app.listen(port)
}

export {app, init_app, init_endpoints}


