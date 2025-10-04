const { DataTypes: dt } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/user'); // Import User model

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

// Association: One User → Many MachineData
User.hasMany(MachineData, { foreignKey: 'userId' });
MachineData.belongsTo(User, { foreignKey: 'userId' });

module.exports = MachineData;
