const { DataTypes:dt} = require('sequelize');
const {sequelize} = require('../config/database');
const User = require('../models/user');

const TransportData = sequelize.define('TransportData', {

  transport: {
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
  userId: { 
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
});

User.hasMany(TransportData, { foreignKey: 'userId' });
TransportData.belongsTo(User, { foreignKey: 'userId' });

module.exports = TransportData;
