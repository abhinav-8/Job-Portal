'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company, {
        foreignKey: 'companyId',
        onDelete:'CASCADE',
      })
    }
  }
  Job.init({
    companyId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    skills: {
      type:DataTypes.STRING,
      allowNull:false
    },
    experience: {
      type:DataTypes.STRING,
    },
    jd: {
      type:DataTypes.TEXT,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};