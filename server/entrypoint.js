import {PORT, PASSWORD_ROUNDS, TOKEN_EXPIRES_TIME, SECRET_FOR_JWT} from './config.js'
import EmployeeController from './controller/employee-controller.js'
import KpiCalculator from './calculators/kpi-calculator.js'
import EmployeeModel from './models/Employee.js'
import EmployeeDatasource from './datasources/EmployeeMysql.js'
import jwtAuthMiddleWareFunction from './modules/auth_strategies/jwt.js'
//userService, jwtService, passwordHasher
import UserService from './modules/jwt/user-service.js'
import JwtMetadata from './modules/jwt/jwt_metadata.js'
import JwtService from './modules/jwt/jwt_service.js'
import PasswordHasher from './modules/jwt/password_hasher.js'
import {init_endpoints, init_app, app} from './server.js'

let kpiCalculator = new KpiCalculator({})
let employeeDatasource = new EmployeeDatasource()
let employeeModel = new EmployeeModel({employeeDatasource, kpiCalculator})
let passwordHasher = new PasswordHasher(PASSWORD_ROUNDS)
let userService = new UserService(employeeModel, passwordHasher)
let jwtMetadata  = new JwtMetadata(TOKEN_EXPIRES_TIME)
let jwtService = new JwtService(SECRET_FOR_JWT, jwtMetadata)
let employeeController = new EmployeeController({employeeModel, userService, jwtService, passwordHasher});


init_endpoints(app, employeeController, jwtAuthMiddleWareFunction(jwtService))
init_app(app, PORT)