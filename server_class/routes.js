import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
  extended: true
}))

let process_params = (req) => {
  return Object.assign({}, req.params, req.body, req.query)
}

let init_endpoints = (app, employeeController) => {


  app.get('/employee/:id', (req, res) => {
    employeeController.get(process_params(req))
    .then(result => {
      res.send(result)
    })
  })

  app.post('/employee', (req, res) => {
    employeeController.create(process_params(req))
    .then(result => {
      res.send(result)
    })
  })

}

let init_app = (app, port) => {
  app.listen(port)
}

export {
  init_endpoints,
  init_app,
  app
}

console.log("server module")

// diferent ways to create endpoints
  // // localhost:8000, 127.0.0.1:8000/get
  // app.get('/get', (req, res) => {
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({
  //     message: 'holaa'
  //   })
  // })
  // // 127.0.0.1:8000/get/juve
  // app.get('/get/:employee', (req, res) => {
  //   // console.log(req)
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({
  //     message: 'from get employee'
  //   })
  // })
  // // 127.0.0.1:8000/get/employee
  // app.get('/get/employee', (req, res) => {
  //   // console.log(req)
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({})
  // })
  // // 127.0.0.1:8000/get/juve/admin
  // app.get('/get/:employee/admin', (req, res) => {
  //   // console.log(req)
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({})
  // })
  // // 127.0.0.1:8000/get/juve/bugs_per_week
  // app.get('/get/:employee/:kpi', (req, res) => {
  //   // console.log(req)
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({})
  // })
  // app.post('/post/:employee', (req, res)=> {
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({
  //     message: 'from post employee'
  //   })
  // })
  // app.put('/put/:employee', (req, res)=> {
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({
  //     message: 'from put employee'
  //   })
  // })
  // app.patch('/patch',(req, res) => {
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({
  //     message: 'from patch employee'
  //   })
  // })
  // app.delete('/delete', (req, res) => {
  //   console.log(req.params)
  //   console.log(req.body)
  //   console.log(req.query)
  //   res.send({
  //     message: 'from delete employee'
  //   })
  // })
