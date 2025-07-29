const express = require('express');
const router = express.Router();
const {
  saveMachineData,
  getAllMachineData,
  deleteMachineData
} = require('../controllers/machineController');

// 👉 POST: Save new machine data
router.post('/', saveMachineData);

// 👉 GET: Fetch all machine data
router.get('/', getAllMachineData);

// 👉 DELETE: Delete machine data by ID
router.delete('/:id', deleteMachineData);

module.exports = router;
