const express = require('express');
const router = express.Router();
const {
  saveMachineData,
  getAllMachineData,
  deleteMachineData
} = require('../controllers/machineController');
const protect = require('../middleware/protect');

// 👉 POST: Save new machine data
router.post('/',protect, saveMachineData);
// 👉 GET: Fetch all machine data
router.get('/',protect, getAllMachineData);
// 👉 DELETE: Delete machine data by ID
router.delete('/:id',protect, deleteMachineData);

module.exports = router;
