'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const Tasks = require('./tasks.model');
const userModel = require('../auth/models/users');
// const Collection = require('./collection');


const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';
let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const user = userModel(sequelize, DataTypes);
const tasks = Tasks(sequelize, DataTypes);

// const taskCollection = new Collection(tasks);
// const userCollection = new Collection(user);

module.exports = {
  db: sequelize,
  users: user,
  Tasks:tasks
}

