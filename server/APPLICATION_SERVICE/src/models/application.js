'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Application.init({
    jobId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    workex: {
      type:DataTypes.STRING,
    },
    skills: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    references: {
      type:DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};