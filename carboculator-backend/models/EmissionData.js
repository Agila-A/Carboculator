const { DataTypes: dt } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/user'); // Import User model

const EmissionData = sequelize.define('EmissionData', {
  totalMachineEmission: {
    type: dt.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  totalTransportEmission: {
    type: dt.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  totalElectricityEmission: {
    type: dt.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  userId: { // Foreign key
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
});

// Association: One User → One EmissionData (assuming 1 record per user)
User.hasOne(EmissionData, { foreignKey: 'userId' });
EmissionData.belongsTo(User, { foreignKey: 'userId' });

module.exports = EmissionData;
