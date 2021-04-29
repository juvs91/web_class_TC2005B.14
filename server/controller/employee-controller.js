export default class EmployeeController {
  //implement create, update, delete
  constructor({employeeModel}){
    this.employeeModel = employeeModel
  }
  async get(filter){
    // if anything need to be added, validations of the params, get data from another models
    // need to be here
    // also notice the async await
    let employee = await this.employeeModel.get(filter)
    return employee
  }
}