const TransportData = require('../models/TransportData');

// Save transport data
exports.saveTransportData = async (req, res) => {
  try {
    const { transport, count, fuel, hour } = req.body;

    if (!transport || !count || !fuel || !hour) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newData = await TransportData.create({ transport, count, fuel, hour });
    res.status(201).json({ message: 'Transport data saved successfully', data: newData });
  } catch (error) {
    console.error('Error saving transport data:', error);
    res.status(500).json({ message: 'Server error while saving transport data' });
  }
};

// Get all transport data
exports.getTransportData = async (req, res) => {
  try {
    const allData = await TransportData.findAll();
    res.json(allData);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Server error while fetching transport data' });
  }
};

// Delete transport data by ID
exports.deleteTransportData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TransportData.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Transport data not found' });
    }

    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting transport data:', error);
    res.status(500).json({ message: 'Server error while deleting transport data' });
  }
};
