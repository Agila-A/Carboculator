const { DataTypes:dt} = require('sequelize');
const {sequelize} = require('../config/database');

const MachineData = sequelize.define('MachineData', {
  machine: {
    type: dt.STRING,
    allowNull: false,
  },
  count: {
    type: dt.INTEGER,
    allowNull: false,
  },
  fuel: {
    type: dt.STRING,
    allowNull: false,
  },
  hour: {
    type: dt.INTEGER,
    allowNull: false,
  },
});

module.exports = MachineData;
