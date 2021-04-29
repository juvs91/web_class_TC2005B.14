// import AbstractDataSource from './abstract.js'
export default class Employee {
  // AbstractDataSource employeeDataSource
  constructor({employeeDataSource}){
    this.employeeDataSource = employeeDataSource
  }
  get(dataObject){
    return this.employeeDataSource.get(dataObject)
  }
  create(dataObject) {
    return this.employeeDataSource.create(dataObject)
  }
}