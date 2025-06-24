// backend/models/User.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../config/database'); // Import sequelize instance

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // From SignUpPage
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 255] // Minimum 6 characters
        }
    },

    // From RegistrationPage1 (User Details)
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    // From RegistrationPage2 (Mine Details)
    mineName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mineType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mineSize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mineLocation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    annualCoalProduction: {
        type: DataTypes.FLOAT, // Use FLOAT or DECIMAL for numbers
        allowNull: false,
    },
    annualEnergyConsumption: {
        type: DataTypes.FLOAT, // Use FLOAT or DECIMAL for numbers
        allowNull: false,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt
});

// Hook to hash password before saving a new user
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

// Instance method to compare password
User.prototype.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Instance method to get JWT token
User.prototype.getSignedJwtToken = function() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports = User;