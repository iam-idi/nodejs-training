'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init(
    {
      title: DataTypes.STRING,
      code: DataTypes.STRING,
      credit_unit: DataTypes.FLOAT,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Course',
      tableName: 'courses',
    }
  );
  return course;
};
