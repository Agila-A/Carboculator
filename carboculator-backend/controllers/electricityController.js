const electricityData = require('../models/electricityData');

// POST: Save electricity data
exports.saveElectricityData = async (req, res) => {
  try {
    const { source, amount } = req.body;

    if (!source || !amount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newData = await electricityData.create({ source, amount });
    res.status(201).json({ message: 'Electricity data saved successfully', data: newData });
  } catch (error) {
    console.error('Error saving electricity data:', error);
    res.status(500).json({ message: 'Server error while saving electricity data' });
  }
};

// GET: Get all electricity data
exports.getAllElectricityData = async (req, res) => {
  try {
    const data = await electricityData.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching electricity data:', error);
    res.status(500).json({ message: 'Server error while fetching electricity data' });
  }
};

// DELETE: Delete electricity data by ID
exports.deleteElectricityData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await electricityData.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Electricity data not found' });
    }

    res.status(200).json({ message: 'Electricity data deleted successfully' });
  } catch (error) {
    console.error('Error deleting electricity data:', error);
    res.status(500).json({ message: 'Server error while deleting electricity data' });
  }
};
