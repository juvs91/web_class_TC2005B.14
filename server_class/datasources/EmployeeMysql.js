import Sequelize from 'sequelize'
import {MYSQL_URL_CONNECTION_URL} from '../configs.js'
let sequelize = new Sequelize(MYSQL_URL_CONNECTION_URL);

const Employee = sequelize.define("Employee", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.DataTypes.TEXT
  },
  type: {
    type: Sequelize.DataTypes.STRING
  }
  // it also generate with the fields created_at and updated_at
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: true,
    modelName: 'Employee' // We need to choose the model name
});

Employee.sync({alter: true})

class AbstractDataSource {
  get(){
    throw new Error("implement me")
  }
  create(){
    throw new Error("implement me")
  }
}

export default class EmployeeDataSource extends AbstractDataSource {
  constructor(){
    this.Employee = Employee
  }
  get(dataObject){
    // {id: 10}, {fullName: Juventino Guzman}, {fullName: Juventino Guzman, type: Dev}
    // SELECT * from data_test.Employee where fullName = "Juventino Guzman" and type = "Dev"
    return this.Employee.findAll({where: dataObject})
  }
  // {fullName: Juventino Guzman}
  create(dataObject){
    return this.Employee.build(dataObject).save()
  }
}

