import {PORT} from './config.js'
import EmployeeController from './controller/employee-controller.js'
import KpiCalculator from './calculators/kpi-calculator.js'
import EmployeeModel from './models/Employee.js'
import EmployeeDatasource from './datasources/EmployeeMysql.js'
import {init_endpoints, init_app, app} from './server.js'

let kpiCalculator = new KpiCalculator({})
let employeeDatasource = new EmployeeDatasource()
let employeeModel = new EmployeeModel({employeeDatasource, kpiCalculator})
let employeeController = new EmployeeController({employeeModel});


// (async (employeeController) => {
//   let e = await employeeController.get({firstName: 'juuuve'})
//   console.log("bla")
//   console.log(e)
// })(employeeController);

init_endpoints(app, employeeController)
init_app(app, PORT)