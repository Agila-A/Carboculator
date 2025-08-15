const { DataTypes: dt } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/user');

const ElectricityData = sequelize.define('ElectricityData', {
  source: {
    type: dt.STRING,
    allowNull: false,
  },
  amount: {
    type: dt.FLOAT,
    allowNull: false,
  },
  userId: { // 👈 Add this column
    type: dt.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
});


User.hasMany(ElectricityData, { foreignKey: 'userId' });
ElectricityData.belongsTo(User, { foreignKey: 'userId' });

module.exports = ElectricityData;
