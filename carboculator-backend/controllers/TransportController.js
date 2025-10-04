const TransportData = require('../models/TransportData');

// POST: Save transport data
exports.saveTransportData = async (req, res) => {
  try {
    const { transport, count, fuel, hour } = req.body;

    if (!transport || !count || !fuel || !hour) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userId = req.user.id;
    const newData = await TransportData.create({ transport, count, fuel, hour, userId });

    res.status(201).json({ message: 'Transport data saved successfully', data: newData });
  } catch (error) {
    console.error('Error saving transport data:', error);
    res.status(500).json({ message: 'Server error while saving transport data' });
  }
};

// GET: Get all transport data
exports.getAllTransportData = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not found in request' });
    }

    const userId = req.user.id;

    const data = await TransportData.findAll({
      where: { userId }
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching transport data:', error);
    return res.status(500).json({
      message: 'Server error while fetching transport data'
    });
  }
};

// DELETE: Delete transport data by ID
exports.deleteTransportData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TransportData.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Transport data not found' });
    }

    res.status(200).json({ message: 'Transport data deleted successfully' });
  } catch (error) {
    console.error('Error deleting transport data:', error);
    res.status(500).json({ message: 'Server error while deleting transport data' });
  }
};
