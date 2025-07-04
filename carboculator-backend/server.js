// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const { sequelize, connectDB } = require('./config/database'); // Import sequelize and connectDB
const User = require('./models/User'); // Import User model to ensure it's loaded for sync
const authRoutes = require('./routes/auth');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './.env' });

const app = express();

// Enable CORS for all routes (important for frontend-backend communication)
app.use(cors());

// Body parser
app.use(express.json());

// Sync database models
// This will create the table if it doesn't exist
// Use { force: true } only in development to drop and re-create tables
sequelize.sync()
    .then(() => {
        console.log('Database synced: Tables created/updated.');
        // Connect to database after sync
        connectDB();
    })
    .catch(err => console.error('Error syncing database:', err));


// Mount routers
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});