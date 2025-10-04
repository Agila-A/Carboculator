const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './.env' }); // Load environment variables

const { sequelize, connectDB } = require('./config/database'); // Assumes connectDB is a custom connection function
// const User = require('./models/User'); // Ensure this model is initialized
const authRoutes = require('./routes/auth'); // Assume new naming
const machineRoutes = require('./routes/machineRoutes');
const transportRoutes = require('./routes/transportRoutes');
const resultRoutes = require('./routes/resultRoutes');
const electricityRoutes = require('./routes/electricityRoutes')
const emissionRoutes = require('./routes/emissionRoutes');

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173', // The exact origin of your frontend
    credentials: true, // Allow cookies to be sent with requests
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Middlewares
app.use(cors(corsOptions)); // This is the only CORS middleware you need.
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/machine', machineRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/emission/my-emission', resultRoutes);
app.use('/api/electricity' , electricityRoutes)
app.use('/api/emission', emissionRoutes);



// Sync DB and start server
sequelize.sync()
    .then(() => {
        console.log('✅ Database synced: Tables created/updated.');
        connectDB(); // Optional additional DB connection logic
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('❌ Error syncing database:', err));