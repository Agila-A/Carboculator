// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const { sequelize, connectDB } = require('./config/database'); 
const User = require('./models/User'); 
const authRoutes = require('./routes/auth');
const cors = require('cors');

dotenv.config({ path: './.env' });

const app = express();


app.use(cors());


app.use(express.json());

sequelize.sync()
    .then(() => {
        console.log('Database synced: Tables created/updated.');
        connectDB();
    })
    .catch(err => console.error('Error syncing database:', err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});