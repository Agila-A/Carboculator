const express = require('express');
const router = express.Router();
const {
  saveElectricityData,
  getAllElectricityData,
  deleteElectricityData
} = require('../controllers/electricityController');

router.post('/', saveElectricityData);
router.get('/', getAllElectricityData);
router.delete('/:id', deleteElectricityData);

module.exports = router;
