import Sequelize from 'sequelize'
import {MYSQL_URL_CONNECTION_URL} from '../config.js'
console.log(MYSQL_URL_CONNECTION_URL)
const sequelize = new Sequelize(MYSQL_URL_CONNECTION_URL);
const EmployeeMysql = sequelize.define('Employee', {
    // Model attributes are defined here
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    jiraId: {
      type: Sequelize.DataTypes.INTEGER
    },
    firstName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.DataTypes.STRING
      // allowNull defaults to true
    },
    birthdate: {
      type: Sequelize.DataTypes.DATE
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: 'email'
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: true,
    modelName: 'Employee' // We need to choose the model name
  }
);
/* 
for defining relations ships, this can be done in the next way literally from the sequelize docs
https://sequelize.org/master/manual/assocs.html
A.hasOne(B); // A HasOne B
A.belongsTo(B); // A BelongsTo B
A.hasMany(B); // A HasMany B
A.belongsToMany(B, { through: 'C' });// note the through which means the intermadiate table

*/
// if need custom sync(probably yes) check https://sequelize.org/master/manual/model-basics.html#model-synchronization
// and pls check https://sequelize.org/master/manual/model-basics.html#timestamps which is really cool to keep track of when it was ceated
// and when it was updated

// for some ideas to handle the migrations pls check https://www.youtube.com/watch?v=pxo7L5nd1gA
EmployeeMysql.sync({ alter: true })



class EmployeeDataSource {
  constructor() {
    this.EmployeeMysql = EmployeeMysql
  }
  fetch(queryObject){
    // check how to use ands, ors, get some attrs 
    // https://sequelize.org/master/manual/model-querying-basics.html
    // specially check this ones
    //https://sequelize.org/master/manual/model-querying-basics.html#operators
    // https://sequelize.org/master/manual/model-querying-basics.html#logical-combinations-with-operators
    return this.EmployeeMysql.findAll({where: queryObject})
  }

  create(queryObject) {
    // can be simplify with this.create(queryObject)
    return this.EmployeeMysql.build(queryObject).save()
  }

  update(queryObject) {
    return this.EmployeeMysql.update(queryObject)
  }

  transaction(_queryObject) {
    // do custom logic for sequelize transaction
  }

  runRawQuery(_queryObject) {
    // pass queryObject into a query string to run it over MySQL
  }
}
export default EmployeeDataSource;
