const { DataTypes: dt } = require('sequelize');
const { sequelize } = require('../config/database');

const ElectricityData = sequelize.define('ElectricityData', {
  source: {
    type: dt.STRING,
    allowNull: false,
  },
  amount: {
    type: dt.FLOAT,
    allowNull: false,
  }
});

module.exports = ElectricityData;
