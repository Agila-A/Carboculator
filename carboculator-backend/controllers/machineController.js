const MachineData = require('../models/MachineData');

// POST: Save machine data
exports.saveMachineData = async (req, res) => {
  try {
    const { machine, count, fuel, hour } = req.body;

    if (!machine || !count || !fuel || !hour) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newData = await MachineData.create({ machine, count, fuel, hour });
    res.status(201).json({ message: 'Machine data saved successfully', data: newData });
  } catch (error) {
    console.error('Error saving machine data:', error);
    res.status(500).json({ message: 'Server error while saving machine data' });
  }
};

// GET: Get all machine data
exports.getAllMachineData = async (req, res) => {
  try {
    const data = await MachineData.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching machine data:', error);
    res.status(500).json({ message: 'Server error while fetching machine data' });
  }
};

// DELETE: Delete machine data by ID
exports.deleteMachineData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await MachineData.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Machine data not found' });
    }

    res.status(200).json({ message: 'Machine data deleted successfully' });
  } catch (error) {
    console.error('Error deleting machine data:', error);
    res.status(500).json({ message: 'Server error while deleting machine data' });
  }
};
