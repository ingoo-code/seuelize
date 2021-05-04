'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require('./user'); // models/index.js 에서 user.js를 사용하기위해서 가져옴. result class입니다.

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.User = User; // app.js 에서 사용하기위해 db객체에 user 프로퍼티를 만들어서 넣었다.
User.init(sequelize); // sequelize 접속정보를 담은 객체

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.associate(db);


module.exports = db;
