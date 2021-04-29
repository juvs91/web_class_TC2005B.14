import EmployeeDataSource from './datasources/EmployeeMysql.js'
import EmployeeModel from './models/Employee.js'
import KpiCaluclator from './calculators/KpiCalculator.js'
import EmployeeController from './controller/EmployeeController.js'
import {PORT} from './configs.js'
import {init_app, init_endpoints, app} from './routes.js'

let employeeDataSource =  new EmployeeDataSource()
let employeeModel = new EmployeeModel({employeeDataSource})
let kpiCaluclator = new KpiCaluclator()
let employeeController = new EmployeeController({employeeModel, kpiCaluclator})
init_endpoints(app, employeeController)
init_app(PORT)

