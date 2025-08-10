const express = require('express');
const router = express.Router();
const MachineData = require('../models/MachineData');
const TransportData = require('../models/TransportData');
const ElectricityData = require('../models/electricityData');

router.get('/result', async (req, res) => {
  try {
    const machineData = await MachineData.findAll();
    const transportData = await TransportData.findAll();
    const electricityData = await ElectricityData.findAll();

    res.json({
      machine: machineData,
      transport: transportData,
      electricity: electricityData
    });
  } catch (error) {
    console.error('Error fetching result data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
