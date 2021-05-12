export default class EmployeeController {
  //implement create, update, delete
  constructor({employeeModel, userService, jwtService, passwordHasher}){
    this.employeeModel = employeeModel
    this.userService = userService
    this.jwtService = jwtService
    this.passwordHasher = passwordHasher
  }
  async get(filter){
    // if anything need to be added, validations of the params, get data from another models
    // need to be here
    // also notice the async await
    let employee = await this.employeeModel.get(filter)
    return employee
  }
  async login({credentials}) {
    const user = await this.userService.verifyCredentials(credentials);
    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(user);
    return token;
  }
  async signup({employee, credentials}) {
    const password = await this.passwordHasher.hashPassword(credentials.password)
    credentials.password = password
    let user = await this.employeeModel.create({...credentials, ...employee})
    return {token: await this.jwtService.generateToken(user), user}
  }
}