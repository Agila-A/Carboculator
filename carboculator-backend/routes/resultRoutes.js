const express = require('express');
const router = express.Router();
const MachineData = require('../models/MachineData');
const TransportData = require('../models/TransportData');

router.get('/result', async (req, res) => {
  try {
    const machineData = await MachineData.findAll();
    const transportData = await TransportData.findAll();

    res.json({
      machine: machineData,
      transport: transportData,
    });
  } catch (error) {
    console.error('Error fetching result data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
