//import Sequelize constructor from library so that it can be used.
const Sequelize = require('seqeilize');

require('dotenv').config();

//creates connection to the database, and puts my username and password information for mySql
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports=sequelize;