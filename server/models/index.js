'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the database: ', err);
  });

db.users = require('./users')(sequelize, Sequelize);
db.matches = require('./matches')(sequelize, Sequelize);

db.users.hasMany(db.matches, {
  foreignKey: 'user_id',
  sourceKey: 'id'
});
db.matches.belongsTo(db.users, {
  foreignKey: 'user_id',
  targetKey: 'id'
});

const participant = sequelize.define('participant', {}, { timestamps: false });

db.users.belongsToMany(db.matches, {
  through: participant,
  foreignKey: 'order_user_id'
},
  { timestamps: false }
);
db.matches.belongsToMany(db.users, {
  through: participant,
  foreignKey: 'match_id',
},
  { timestamps: false }
);

module.exports = db;