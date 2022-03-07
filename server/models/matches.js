'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  matches.init({
    message: DataTypes.STRING,
    region: DataTypes.STRING,
    region_Detail: DataTypes.INTEGER,
    sitename: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    matchdate: DataTypes.DATE,
    is_matched: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'matches',
  });
  return matches;
};