const express = require('express');
const router = express.Router();
const {
  saveTransportData,
  getAllTransportData,
  deleteTransportData,
} = require('../controllers/TransportController');
const protect = require('../middleware/protect');

router.post('/', protect,saveTransportData);
router.get('/',protect, getAllTransportData);
router.delete('/:id', protect,deleteTransportData);

module.exports = router;
