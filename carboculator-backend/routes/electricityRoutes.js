const express = require('express');
const router = express.Router();
const {
  saveElectricityData,
  getAllElectricityData,
  deleteElectricityData
} = require('../controllers/electricityController');
const protect = require('../middleware/protect');

router.post('/',protect, saveElectricityData);
router.get('/', protect,getAllElectricityData);
router.delete('/:id',protect, deleteElectricityData);

module.exports = router;
