// backend/controllers/authController.js
const User = require('../models/User'); // Import the Sequelize User model
const jwt = require('jsonwebtoken');

// @desc    Register user
// @route   POST /api/auth/signup
// @access  Public
exports.registerUser = async (req, res) => {
    const {
        fullName,
        email,
        password,
        phoneNumber,
        companyName,
        designation,
        mineName,
        mineType,
        mineSize,
        mineLocation,
        annualCoalProduction,
        annualEnergyConsumption
    } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ where: { email } });

        if (user) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Create new user
        user = await User.create({
            fullName,
            email,
            password, // Password hashing happens in the model's beforeCreate hook
            phoneNumber,
            companyName,
            designation,
            mineName,
            mineType,
            mineSize,
            mineLocation,
            annualCoalProduction,
            annualEnergyConsumption
        });

        // Generate JWT token
        const token = user.getSignedJwtToken();

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                designation: user.designation,
                companyName: user.companyName,
                mineName: user.mineName
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        // More specific error handling can be added for validation errors etc.
        res.status(500).send('Server Error during registration');
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = user.getSignedJwtToken();

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                designation: user.designation,
                companyName: user.companyName,
                mineName: user.mineName
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Server Error during login');
    }
};