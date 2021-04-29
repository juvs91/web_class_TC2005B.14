export default class EmployeeController {
  constructor({employeeModel, kpiCaluclator}){
    this.employeeModel = employeeModel
    this.kpiCaluclator = kpiCaluclator
  }
  async get(dataObject){
    let employee = await this.employeeModel.get(dataObject)
    return {...employee, ...this.kpiCaluclator.calculate(employee)}
  }
  create(dataObject){
    return this.employeeModel.create(dataObject)
  }
}