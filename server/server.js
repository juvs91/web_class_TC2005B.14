// const express = require('express')
import express from 'express'
const app = express()
// const cors = require('cors')
import cors from 'cors'
// const cookieParser = require('cookie-parser')
import cookieParser from 'cookie-parser'
import path from 'path'
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
  extended: true
}))

// set the rendering motor view templating
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
// set as static pages the exported demo game
app.use('/game', express.static(path.resolve('./views/game')))

let processParams = (req) => {
  return Object.assign({}, req.body, req.params, req.query)
}

let get_error_status = (error) => {
  return error.status || 500
}

let init_endpoints = (app, employeeController, authMiddleWareFunction) => {
  console.log(authMiddleWareFunction)
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
  app.get('/game/:id',(_req, resp) => {
    resp.render('employee/game', {
      user: {
        id: 1,
        role: 'admin',
        name: 'juve'
      },
      employees: [{
        name: 'ali',
        age: 24
      }, {
        name: 'alex',
        age:25
      }]
    })
  })
  app.post('/login', (req, resp) => {
    let params = processParams(req)
    employeeController.login(params)
    .then(token => {
      resp.send({token})
    })
    .catch(err => {
      resp.status(get_error_status(err)).send({ error: err.message })
    })
  })
  app.post('/signup', async (req, resp) => {
    let params = processParams(req)
    try {
      let tokenUser = await employeeController.signup(params)
      resp.send(tokenUser) 
    } catch (err) {
      resp.status(get_error_status(err)).send({ error: err.message })
    }
  })
  app.get('/auth_route', authMiddleWareFunction, (_req, resp, next)=> {
    resp.send({success: "true"}) 
  })
}

let init_app = (app, port) => {
  return app.listen(port)
}

export {app, init_app, init_endpoints}


