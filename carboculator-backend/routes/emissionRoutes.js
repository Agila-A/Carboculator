const express = require('express');
const router = express.Router();
const EmissionData = require('../models/emissionData');
const protect = require('../middleware/protect');

router.get("/", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const emissionData = await EmissionData.findOne({ where: { userId } });

    if (!emissionData) {
      return res.status(404).json({ message: "No emission data found for this user" });
    }

    res.status(200).json(emissionData);
  } catch (error) {
    console.error("Error fetching emission data:", error);
    res.status(500).json({ message: "Server error while fetching emission data" });
  }
});


router.post("/", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const { totalMachineEmission, totalTransportEmission, totalElectricityEmission } = req.body;

    let emissionData = await EmissionData.findOne({ where: { userId } });

    if (emissionData) {
      // Update existing record
      emissionData.totalMachineEmission = totalMachineEmission ?? emissionData.totalMachineEmission;
      emissionData.totalTransportEmission = totalTransportEmission ?? emissionData.totalTransportEmission;
      emissionData.totalElectricityEmission = totalElectricityEmission ?? emissionData.totalElectricityEmission;
      await emissionData.save();
    } else {
      // Create new record
      emissionData = await EmissionData.create({
        userId,
        totalMachineEmission: totalMachineEmission || 0,
        totalTransportEmission: totalTransportEmission || 0,
        totalElectricityEmission: totalElectricityEmission || 0
      });
    }

    res.status(200).json({ message: "Emission data saved successfully", data: emissionData });
  } catch (error) {
    console.error("Error saving emission data:", error);
    res.status(500).json({ message: "Server error while saving emission data" });
  }
});

module.exports = router;
