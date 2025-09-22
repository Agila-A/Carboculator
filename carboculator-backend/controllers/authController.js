// backend/controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');
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
        let user = await User.findOne({ where: { email } });

        if (user) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        user = await User.create({
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
        });
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
        res.status(500).send('Server Error during registration');
    }
};
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
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