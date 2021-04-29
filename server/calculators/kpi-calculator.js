import AbstractCalculator from './abstract-calculator.js'

export default class KpiCalculator extends AbstractCalculator{
  constructor({}){
    super()
    // in here pls pass all the config object or all the kpis that need to be calculated
  }
  calculate({id, jiraId}){
    // in here do the actual implementation of the calculate method for the kpis passed in the 
    // contructor, the params should be id and jiraId from the employee, all kpis could be 
    // methods here and the return value could be 
    // {kpi_name: kpi_value}
    return {mock_kpi: 10}
  }
}