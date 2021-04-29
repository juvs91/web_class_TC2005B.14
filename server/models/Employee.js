export default class Employee {
  constructor({employeeDatasource, kpiCalculator}){
    this.datasource = employeeDatasource
    this.kpiCalculator = kpiCalculator
  }
  datasource(){
    return this.datasource
  }
  // too lazy for a cool docstring, return a Promise<EmployeeWithKpisJSON>
  get(queryObject) {
    return this.datasource.fetch(queryObject)
    .then(createdDataSourceEmployee => {
      let kpisCalculated = this.kpiCalculator.calculate(createdDataSourceEmployee)
      return Promise.resolve({...createdDataSourceEmployee, ...kpisCalculated})
    })
  }

  /**
   * 
   * @param {Employee data firstName: firstNameValue} queryObject 
   * @returns Promise<EmployeeJSON>
   */
  create(queryObject) {
    // can simply return the this.datasource.create(queryObject) but notice the . then function 
    // which return the same createdDataSourceEmployee but with a promise resolved, if needed to add stuff
    // can be done there and still returning the promise
    return this.datasource.create(queryObject)
    .then(createdDataSourceEmployee => {
      return Promise.resolve(createdDataSourceEmployee)
    })
  }

  update(_queryObject) {
    // TODO implement me, call get then update the attrs, then call save method from datasource
  }

  delete(_queryObject) {
    // TODO implement me and implement a soft delete
  }

}