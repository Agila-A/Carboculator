// server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './.env' }); // Load environment variables

const { sequelize, connectDB } = require('./config/database'); // Assumes connectDB is a custom connection function
const User = require('./models/User'); // Ensure this model is initialized
const authRoutes = require('./routes/auth'); // Assume new naming
const machineRoutes = require('./routes/machineRoutes');
const transportRoutes = require('./routes/transportRoutes');
const resultRoutes = require('./routes/resultRoutes');
const electricityRoutes = require('./routes/electricityRoutes')

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/machine', machineRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api', resultRoutes);
app.use('/api/electricity' , electricityRoutes)

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