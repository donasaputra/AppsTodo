const Sequelize = require('sequelize');
const TodoModel = require('./models/user');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSWD,{
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const todo = TodoModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
    console.log('Todo db and user table have been created')
});

module.exports = todo;