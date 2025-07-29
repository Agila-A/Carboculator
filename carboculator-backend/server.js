const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const machineRoutes = require('./routes/machineRoutes');
const transportRoutes = require('./routes/transportRoutes'); // ✅ Add this if you have transport routes
const resultRoutes = require('./routes/resultRoutes'); 

dotenv.config();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/machine', machineRoutes);
app.use('/api/transport', transportRoutes); // ✅ Register transport routes
app.use('/api', resultRoutes);

// Database sync and server start
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`✅ Server is running on http://localhost:${process.env.PORT}`);
  });
});
